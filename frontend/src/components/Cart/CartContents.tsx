import React from 'react'
import { RiCloseLine, RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
	const cartItems = [
		{
			id: 1,
			name: 'T-shirt',
			size: 'M',
			color: 'Blue',
			quantity: 2,
			price: 15,
			image: 'https://picsum.photos/200?random=1',
		},
		{
			id: 2,
			name: 'Jeans',
			size: 'L',
			color: 'Black',
			quantity: 1,
			price: 20,
			image: 'https://picsum.photos/200?random=2',
		},
		{
			id: 3,
			name: 'Shirt',
			size: 'S',
			color: 'Red',
			quantity: 3,
			price: 10,
			image: 'https://picsum.photos/200?random=3',
		},
		{
			id: 4,
			name: 'Socks',
			size: 'M',
			color: 'Green',
			quantity: 1,
			price: 5,
			image: 'https://picsum.photos/200?random=4',
		},
		{
			id: 5,
			name: 'Jacket',
			size: 'L',
			color: 'Brown',
			quantity: 2,
			price: 25,
			image: 'https://picsum.photos/200?random=5',
		},
		{
			id: 6,
			name: 'Pants',
			size: 'S',
			color: 'Blue',
			quantity: 1,
			price: 15,
			image: 'https://picsum.photos/200?random=6',
		},
	]
	return (
		<div>
			{cartItems.map((item, index) => (
				<div
					key={index}
					className='flex items-start justify-between py-4 border-b'
				>
					<div className='flex items-center'>
						<img
							src={item.image }
							alt={item.name}
							className='w-20 h-24 object-cover'
						/>
						<div className='ml-4'>
							<h3 className=''>{item.name}</h3>
							<p className='text-gray-600'>
								size: {item.size} | color: {item.color}
							</p>
							<div className='flex items-center mt-2 bg-gray-100 w-fit '>
								<button className='border rounded-sm px-2  text-xl font-medium'>
									-
								</button>
								<span className='px-4 border-y border-gray-300'>{item.quantity}</span>
								<button className='border rounded px-2  text-xl font-medium'>
									+
								</button>
							</div>
						</div>
					</div>
					<div className='flex flex-col justify-between items-end h-24'>
						<p className='text-gray-600'>$ {item.price.toLocaleString()}</p>
						<button>
							<RiCloseLine className='h-6 w-6 mt-2 text-gray-600 hover:text-gray-800 ' />
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default CartContents
