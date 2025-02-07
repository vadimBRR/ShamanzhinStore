import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'
const FeaturedCollection = () => {
	return (
		<section className='py-16 px-4 lg:px-0'>
			<div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-red-50 rounded-3xl'>
				{/* Left */}
				<div className='lg:w-1/2 p-8 text-center lg:text-left'>
					<h2 className='text-lg font-semibold text-gray-700 mb-2'>
						Fashion at its best
					</h2>
					<h2 className='text-4xl lg:text-5xl font-bold mb-6'>
						All the essentials in one place
					</h2>
					<p className='text-gray-600 text-lg mb-6'>
						Discover the perfect blend of fashion, comfort, and style with our
						collection. From classic to trendy, we have everything you need to
						look and feel your best.
					</p>
					<Link
						to='/collections/all'
						className='bg-black text-white px-6 py-2 rounded-sm text-lg hover:bg-gray-300  hover:text-gray-700 transition-all'
					>
						Shop Now
					</Link>
				</div>

        <div className="lg:w-1/2">
          <img src={featured} alt="Featured" className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl lg:rounded-tl-none lg:rounded-br-3xl" />
        </div>
			</div>
		</section>
	)
}

export default FeaturedCollection
