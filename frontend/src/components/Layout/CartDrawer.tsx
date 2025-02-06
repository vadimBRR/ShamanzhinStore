import React from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../Cart/CartContents'

type Props = {
	isDrawerOpen: boolean
	toggleDrawer: () => void
}
const CartDrawer = ({ isDrawerOpen, toggleDrawer }: Props) => {
	return (
		<div
			className={`fixed top-0 right-0 w-6/7 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
				isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			{/* Close button */}

			<div className='flex justify-between p-4 '>
				<h2 className='text-xl font-semibold'>Your Cart</h2>

				<button onClick={toggleDrawer} className='cursor-pointer'>
					<IoMdClose className='h-6 w-6 text-gray-600' />
				</button>
			</div>

			{/* Cart */}
			<div className='flex-grow p-4 overflow-y-auto'>
        <CartContents/>
      </div>

			<div className='p-4 bg-white sticky bottom-0'>
				<button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition '>
					Checkout
				</button>
        <p className='text-sm text-gray-600 mt-2 text-center tracking-tighter'>Shipping, taxes and discounts calculated at checkout.</p>
			</div>
		</div>
	)
}

export default CartDrawer
