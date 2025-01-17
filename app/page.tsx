import {
	Categories,
	Container,
	Filters,
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
				<div className='flex gap-10'>
					<div>
						<Filters />
					</div>
				</div>

				<div>{/* <Filters /> */}</div>
			</Container>
		</>
	)
}
