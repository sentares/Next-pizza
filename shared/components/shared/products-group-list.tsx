'use client'

import { useCategoryStore } from '@/app/store/category'
import React from 'react'
import { useIntersection } from 'react-use'
import { ProductCard } from './product-card'
import { Title } from './title'

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
	const intersection = useIntersection(intersectionRef, { threshold: 0.6 })

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [title, categoryId, intersection?.isIntersecting])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className='grid grid-cols-3 gap-[50px]'>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
						ingredients={product.ingredients}
					/>
				))}
			</div>
		</div>
	)
}
