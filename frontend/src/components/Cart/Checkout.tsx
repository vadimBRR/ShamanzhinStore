import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PayPalButton from './PayPalButton'

const cart = {
	products: [
		{
			name: 'T-shirt',
			size: 'M',
			color: 'Blue',
			price: 120,
			image: 'https://picsum.photos/200?random=1',
		},
		{
			name: 'Jeans',
			size: 'L',
			color: 'Black',
			price: 70,
			image: 'https://picsum.photos/200?random=2',
		},
	],
	totalPrice: 190,
}

type ShippingAddress = {
  firstName: string 
  lastName: string 
  address: string 
  city: string 
  country: string 
  postalCode: string 
  phone: string 
}
const Checkout = () => {
	const navigate = useNavigate()
	const [checkoutId, setCheckoutId] = useState<number|null>(null)
	const [shippingAddress, setShippingAddress] = useState<ShippingAddress >({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCheckoutId(123)
  }

  const handlePaymentSuccess = (details:any) => {
    console.log("payment success", details);
    navigate("/order-confirmation")
  }
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter min-h-screen'>
			{/* Left */}
			<div className='bg-white rounded-lg p-6'>
				<h2 className='text-2xl uppercase mb-6'>Checkout</h2>
				<form className='' onSubmit={handleSubmit}>
					<h3 className='text-lg mb-4'>Contact Details</h3>
					<div className='mb-4'>
						<label className='block text-gray-700'>Email</label>
						<input
							type='email'
							value='example@ex.com'
							className='w-full p-2 border border-gray-300 rounded'
							disabled
						/>
					</div>
					<h3 className='text-lg mb-4'>Delivery</h3>
					<div className='mb-4 grid grid-cols-2 gap-4'>
						<div className=''>
							<label className='block text-gray-700'>First Name</label>
							<input
								type='text'
								className='w-full p-2 border border-gray-300 rounded'
								value={shippingAddress.firstName}
								required
								onChange={e =>
									setShippingAddress({
										...shippingAddress,
										firstName: e.target.value,
									})
								}
							/>
						</div>

						<div className=''>
							<label className='block text-gray-700'>Last Name</label>
							<input
								type='text'
								className='w-full p-2 border border-gray-300 rounded'
								required
								value={shippingAddress.lastName}
								onChange={e =>
									setShippingAddress({
										...shippingAddress,
										lastName: e.target.value,
									})
								}
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Address</label>
						<input
							type='text'
							value={shippingAddress.address}
              required
							onChange={e =>
								setShippingAddress({
									...shippingAddress,
									address: e.target.value,
								})
							}
							className='w-full p-2 border border-gray-300 rounded'
						/>
					</div>
					<div className='mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
						<div className=''>
							<label className='block text-gray-700'>City</label>
							<input
								type='text'
								value={shippingAddress.city}
								required
								onChange={e =>
									setShippingAddress({
										...shippingAddress,
										city: e.target.value,
									})
								}
								className='border border-gray-300 w-full rounded p-2'
							/>
						</div>
						<div className=''>
							<label className='block text-gray-700'>Postal Code</label>
							<input
								type='text'
								value={shippingAddress.postalCode}
								required
								onChange={e =>
									setShippingAddress({
										...shippingAddress,
										postalCode: e.target.value,
									})
								}
								className='border border-gray-300 w-full rounded p-2'
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Country</label>
						<input
							type='text'
							value={shippingAddress.country}
              required
							onChange={e =>
								setShippingAddress({
									...shippingAddress,
									country: e.target.value,
								})
							}
							className='w-full border border-gray-300 p-2 rounded'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Phone number</label>
						<input
							type='tel'
							value={shippingAddress.phone}
              required
							onChange={e =>
								setShippingAddress({
									...shippingAddress,
									phone: e.target.value,
								})
							}
							className='w-full border border-gray-300 p-2 rounded'
						/>
					</div>

					<div className='mt-6'>
						{!checkoutId ? (
							<button
								type='submit'
								className='w-full bg-black text-white py-3 rounded'
							>
								Continue to Payment
							</button>
						) : (
							<div>
                <h3 className="text-lg mb-4">Pay with</h3>
                {/* Stripe */}
                <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={() => alert("Payment failed")} />
              </div>
						)}
					</div>
				</form>
			</div>
      {/* Right */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4 border-gray-300">
          {cart.products.map((product, index) => (
            <div className="flex items-start justify-between py-2 border-b border-gray-300" key={index}>
              <div className="flex items-start ">
                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4" />
                <div className="">
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500 ">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
                <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p className="">Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t border-gray-300 pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
		</div>
	)
}

export default Checkout
