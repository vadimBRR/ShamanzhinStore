import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeaturesItems = ({
	title,
	description,
	Icon,
}: {
	title: string
	description: string
	Icon: typeof HiShoppingBag
}) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='p-4 rounded-full mb-4'>
				<Icon className='text-xl' />
			</div>
			<h4 className='tracking-tighter mb-2 uppercase'>
				{title}
			</h4>
			<p className='text-gray-600 text-sm tracking-tighter'>
				{description}
			</p>
		</div>
	)
}
const FeaturesSection = () => {
	return (
		<section className='py-16 px-4 bg-white'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        <FeaturesItems title='Free International Shipping' description='On all orders over $50' Icon={HiShoppingBag}/>
        <FeaturesItems title='90 Days return' description='Money back guarantee' Icon={HiArrowPathRoundedSquare}/>
        <FeaturesItems title='Secure Payment' description='100% secure payment' Icon={HiOutlineCreditCard}/>
        
      </div>
		</section>
	)
}

export default FeaturesSection
