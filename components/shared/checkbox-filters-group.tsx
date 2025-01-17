import React from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Item = FilterChecboxProps
interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit: number
	searchInputPlaceholder?: string
	defaultValue?: string
	onChange: (values: string[]) => void
	className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	onChange,
	items,
	title,
	limit = 5,
	defaultValue,
	searchInputPlaceholder = 'Поиск',
	defaultItems,
	className,
}) => {
	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>
			{/* 
			{showAll && ( */}
			<div className='mb-5'>
				<Input
					// onChange={onChangeSearchInput}
					placeholder={searchInputPlaceholder}
					className='bg-gray-50 border-none'
				/>
			</div>
			{/* )} */}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{items.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						// checked={selected?.has(item.value)}
						// onCheckedChange={() => onClickCheckbox?.(item.value)}
						// name={name}
					/>
				))}
			</div>
			{/* 
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)} */}
		</div>
	)
}
