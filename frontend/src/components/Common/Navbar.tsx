import React from 'react'
import {
	HiBars3BottomRight,
	HiOutlineShoppingBag,
	HiOutlineUser,
} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const types = [
    {
      name: 'men',
      link: '/collections/all?gender=Men'
    },
    {
      name: 'women',
      link: '/collections/all?gender=Women'
    },
    {
      name: 'top wear',
      link: '/collections/all?gender=Men'
    },
    {
      name: 'bottom wear',
      link: '/collections/all?gender=Women'
    }
  ]
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
	const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}
	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen)
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
							to={type.link}
							className='text-gray-700 hover:text-black text-sm font-medium uppercase'
						>
							{type.name}
						</Link>
					))}
				</div>

				<div className='flex items-center space-x-4'>
					<Link to='/profile' className='hover:text-black'>
						<HiOutlineUser className='h-6 w-6 text-gray-700' />
					</Link>
					<button
						className='relative hover:text-black cursor-pointer'
						onClick={toggleDrawer}
					>
						<HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
						<span className='absolute -top-1 text-xs bg-red-500 text-white rounded-full px-2 py-0.5'>
							2
						</span>
					</button>

					<button className='md:hidden cursor-pointer ' onClick={toggleMobileNav}>
						<HiBars3BottomRight className='h-6 w-6 text-gray-700' />
					</button>
					<div className='overflow-hidden'>
						<SearchBar />
					</div>
				</div>
			</nav>
			<CartDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

			<div
				className={`md:hidden fixed top-0 left-0 w-6/7 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
					isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex justify-between p-4 '>
					<h2 className='text-xl font-semibold'>Menu</h2>

					<button onClick={toggleMobileNav} className='cursor-pointer'>
						<IoMdClose className='h-6 w-6 text-gray-600' />
					</button>
				</div>

        <div className='flex-grow p-4 overflow-y-auto'>
          {types.map((type, index) => (
            <Link
              key={index}
              to={type.link}
              onClick={toggleMobileNav}
              className='block text-gray-600 hoover:text-black uppercase'
              >
                {type.name}
              </Link>
          ))}
        </div>
			</div>
		</>
	)
}

export default Navbar
