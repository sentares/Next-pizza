import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between p-8'>
				{/* Rignt */}
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</div>

				{/* {hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)} */}

				{/* Правая часть */}
				<div className='flex items-center gap-3'>
					{/* <AuthModal
						open={openAuthModal}
						onClose={() => setOpenAuthModal(false)}
					/>

					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

					{hasCart && <CartButton />} */}
				</div>
			</Container>
		</header>
	)
}
