import {
	Categories,
	Container,
	Filters,
	ProductCard,
	ProductsGroupList,
	SortPopup,
	Title,
	TopBar,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-16'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								items={[
									{
										id: 1,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 2,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 3,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 4,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 5,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},
								]}
								title='Пиццы'
								categoryId={1}
							/>

							<ProductsGroupList
								items={[
									{
										id: 1,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 2,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 3,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 4,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},

									{
										id: 5,
										name: 'Пицца "Пепперони"',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11ef3db2188200718edeb6d5ec3e3ecd.avif',
										price: 550,
										items: [{ price: 500 }],
									},
								]}
								title='Завтраки'
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
