import React from 'react'
import {
	HiBars3BottomRight,
	HiOutlineShoppingBag,
	HiOutlineUser,
} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {
	const types = ['men', 'women', 'top wear', 'bottom wear']
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
	return (
		<>
			<nav className='container mx-auto flex items-center justify-between py-4 px-6'>
				<div>
					<Link to='/' className='text-2xl font-medium'>
						{' '}
						Shamanzhin{' '}
					</Link>
				</div>

				<div className='hidden md:flex space-x-6'>
					{types.map((type, index) => (
						<Link
							key={index}
							to='#'
							className='text-gray-700 hover:text-black text-sm font-medium uppercase'
						>
							{type}
						</Link>
					))}
				</div>

				<div className='flex items-center space-x-4'>
					<Link to='/profile' className='hover:text-black'>
						<HiOutlineUser className='h-6 w-6 text-gray-700' />
					</Link>
					<button className='relative hover:text-black cursor-pointer' onClick={toggleDrawer}>
						<HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
						<span className='absolute -top-1 text-xs bg-red-500 text-white rounded-full px-2 py-0.5'>
							2
						</span>
					</button>

					<button className='md:hidden'>
						<HiBars3BottomRight className='h-6 w-6 text-gray-700' />
					</button>
					<div className='overflow-hidden'>
						<SearchBar />
					</div>
				</div>
			</nav>
      <CartDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
		</>
	)
}

export default Navbar
