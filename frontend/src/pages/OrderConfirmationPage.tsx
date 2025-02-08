import { useNavigate } from 'react-router-dom'

const checkout = {
	_id: '123123',
	createAt: new Date(),
	checkoutItems: [
		{
			productId: '1',
			name: 'T-shirt',
			size: 'M',
			color: 'Blue',
			price: 120,
			quantity: 1,
			image: 'https://picsum.photos/200?random=1',
		},

		{
			productId: '2',
			name: 'Jeans',
			size: 'L',
			color: 'Black',
			price: 70,
			quantity: 1,
			image: 'https://picsum.photos/200?random=2',
		},
	],
	shippingAddress: {
		address: '123 Main St',
		city: 'New York',
		country: 'USA',
	},
}
const OrderConfirmationPage = () => {
  const navigate = useNavigate()
	const calculateEstimatedDeliveryDate = (createAt: Date) => {
		const orderDate = new Date(createAt)
		orderDate.setDate(orderDate.getDate() + 19)
		return orderDate.toLocaleDateString()
	}

  const handleGoToHome = () => {
    navigate('/')
  }
	return (
		<div className='max-w-4xl mx-auto bg-white p-6'>
			<h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
				Thank you for your order!
			</h1>

			{checkout && (
				<div className='p-6 rounded-lg border border-gray-300'>
					<div className='flex justify-between mb-20'>
						<div className=''>
							<h2 className='text-xl font-semibold'>
								Order ID: {checkout._id}
							</h2>
							<p className='text-gray-500'>
								Order date: {checkout.createAt.toLocaleDateString()}
							</p>
						</div>

						<div className=''>
							<p className='text-emerald-700'>
								Estimated delivery date:{' '}
								{calculateEstimatedDeliveryDate(checkout.createAt)}
							</p>
						</div>
					</div>

					<div className='mb-20'>
						{checkout.checkoutItems.map(item => (
							<div className='flex items-center mb-4' key={item.productId}>
								<img
									src={item.image}
									alt={item.name}
									className='w-16 h-16 object-cover mr-4'
								/>
								<div className=''>
									<h4 className='text-md font-semibold'>{item.name}</h4>
									<p className='text-sm text-gray-500'>
										{item.color} - {item.size}
									</p>
								</div>
								<div className='ml-auto text-right'>
									<p className='text-md '>${item.price.toFixed(2)}</p>
									<p className='text-sm text-gray-500'>Qty: {item.quantity}</p>
								</div>
							</div>
						))}
					</div>
					<div className='grid grid-cols-2 gap-8'>
						<div className=''>
							<h4 className='text-lg font-semibold mb-2'>Payment</h4>
							<p className='text-gray-600'>PayPal</p>
						</div>

						<div className=''>
							<h4 className='text-lg font-semibold mb-2'>Shipping Address</h4>
							<p className='text-gray-600'>
								{checkout.shippingAddress.address}
							</p>
							<p className='text-gray-600'>
								{checkout.shippingAddress.city},{' '}
								{checkout.shippingAddress.country}
							</p>
						</div>
					</div>
				</div>
			)}
      <button className='w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition mt-4' onClick={handleGoToHome}>Back to Home</button>
		</div>
	)
}

export default OrderConfirmationPage
