import {
	Container,
	GroupVariants,
	PizzaImage,
	Title,
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

	if (!product) {
		return notFound()
	}
	return (
		<Container>
			<PizzaImage imageUrl={product.imageUrl} size={40} />

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={''} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>asd</p>

				<GroupVariants
					items={[
						{ name: '40 см', value: '40' },
						{ name: '50 см', value: '50' },
					]}
					// value={String(size)}
					// onClick={value => setSize(Number(value) as PizzaSize)}
				/>
			</div>
		</Container>
	)
}
