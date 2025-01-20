'use client'

import { cn } from '@/shared/lib/utils'
import { Ingredient, ProductItem } from '@prisma/client'
import React from 'react'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { PizzaImage } from './pizza-image'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	loading?: boolean
	onSubmit: (itemId: number, ingredients: number[]) => void
	className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	items,
	imageUrl,
	ingredients,
	loading,
	onSubmit,
	className,
}) => {
	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl={imageUrl} size={30} />

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{name}</p>

				<div className='flex flex-col gap-4 mt-5'>
					<GroupVariants
						items={[]}
						value={''}
						// onClick={value => setSize(Number(value) as PizzaSize)}
					/>

					<GroupVariants
						items={[]}
						value={''}
						// onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{/* {ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								name={ingredient.name}
								price={ingredient.price}
								imageUrl={ingredient.imageUrl}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))} */}
					</div>
				</div>

				<Button
					// loading={loading}
					// onClick={handleClickAdd}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {123} ₽
				</Button>
			</div>
		</div>
	)
}
