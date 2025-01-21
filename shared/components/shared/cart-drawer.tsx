'use client'

import React from 'react'
import Image from 'next/image'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'
// import { CartDrawerItem } from './cart-drawer-item'
// import { getCartItemDetails } from '@/shared/lib'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { Title } from './title'
import { cn } from '@/shared/lib/utils'
// import { useCart } from '@/shared/hooks'

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	// const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()
	const [redirecting, setRedirecting] = React.useState(false)

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		// updateItemQuantity(id, newQuantity)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent className='flex flex-col h-full justify-between pb-0 bg-[#F4F1EE]'>
				<div
					className={cn(
						'flex flex-col h-full'
						// !totalAmount && 'justify-center'
					)}
				>
					<SheetHeader>
						<SheetTitle>
							В корзине <span className='font-bold'>3 товара</span>
						</SheetTitle>
					</SheetHeader>
				</div>

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Итого
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>

							<span className='font-bold text-lg'>100 ₽</span>
						</div>

						<Link href='/checkout'>
							<Button
								onClick={() => setRedirecting(true)}
								type='submit'
								className='w-full h-12 text-base'
							>
								Оформить заказ
								<ArrowRight className='w-5 ml-2' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
