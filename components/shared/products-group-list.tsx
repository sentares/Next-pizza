'use client'

import React from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface Props {
	title: string
	items: any[]
	categoryId: number
	listClassName?: string
	className?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	categoryId,
	items,
	title,
	listClassName,
	className,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	const intersectionRef = React.useRef(null)
	// @ts-ignore
	const intersection = useIntersection(intersectionRef, { threshold: 0.4 })

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [title, categoryId, intersection?.isIntersecting])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className='grid grid-cols-3 gap-[50px]'>
				{items.map(product => (
					<ProductCard
						key={product.id}
						imageUrl={product.imageUrl}
						name={product.name}
						price={product.items[0].price}
						className=''
					/>
				))}
			</div>
		</div>
	)
}
