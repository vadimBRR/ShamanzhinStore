import React from 'react'
import mensCollection from '../../assets/mens-collection.webp'
import womensCollection from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

const CollectionItem = ({
	src,
	alt,
	label,
	link,
}: {
	src: string
	alt: string
	label: string
	link: string
}) => (
	<div className='relative flex-1'>
		<img src={src} alt={alt} className='w-full h-[700px] object-cover' />
		<div className='absolute bottom-4 left-4 bg-white/90 p-4'>
			<h2 className='text-2xl font-bold text-gray-900'>{label}</h2>
			<Link to={link} className='underline text-gray-900 hover:text-gray-400'>
				Shop Now
			</Link>
		</div>
	</div>
)
const GenderCollectionSection = () => {
	return (
		<section className='py-16 px-4 lg:px-0'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				<CollectionItem
					src={womensCollection}
					alt="Women's Collection"
					label="Women's Collection"
					link='/collections/all?gender=Women'
				/>
				<CollectionItem
					src={mensCollection}
					alt="Men's Collection"
					label="Men's Collection"
					link='/collections/all?gender=Men'
				/>
			</div>
		</section>
	)
}

export default GenderCollectionSection
