'use client'

import React from 'react'
import { ChoosePizzaForm } from './chose-pizza-form'
import { ChooseProductForm } from './chose-product-form'
import { ProductWithRelations } from '@/@types/prisma'

interface Props {
	product: ProductWithRelations
	onSubmit?: VoidFunction
}

export const ProductForm: React.FC<Props> = ({
	product,
	onSubmit: _onSubmit,
}) => {
	// const [addCartItem, loading] = useCartStore(state => [
	// 	state.addCartItem,
	// 	state.loading,
	// ])

	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType)

	if (isPizzaForm) {
		return (
			<ChoosePizzaForm
				onSubmit={() => {}}
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				items={product.items}
				// onSubmit={onSubmit}
				// loading={loading}
			/>
		)
	}

	return (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			price={firstItem.price}
			// onSubmit={onSubmit}
			// loading={loading}
		/>
	)
}
