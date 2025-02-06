import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
const selectedProduct = {
	name: 'Jacket',
	price: 120,
	originalPrice: 150,
	description: 'A warm and cozy jacket for the winter season.',
	brand: 'Zara',
	material: 'Cotton',
	size: ['S', 'M', 'L', 'XL'],
	colors: ['Red', 'Blue', 'Green'],
	images: [
		{
			url: 'https://picsum.photos/500/500?random=1',
			alt: 'Jacket 1',
		},
		{
			url: 'https://picsum.photos/500/500?random=2',
			alt: 'Jacket 2',
		},
	],
}
const ProductDetails = () => {
	const [mainImage, setMainImage] = useState('')
	const [selectedColor, setSelectedColor] = useState('')
	const [selectedSize, setSelectedSize] = useState('')
	const [quantity, setQuantity] = useState(1)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
	useEffect(() => {
		if (selectedProduct.images.length > 0) {
			setMainImage(selectedProduct.images[0].url)
		}
		// if (selectedProduct.colors.length > 0) {
		// 	setSelectedColor(selectedProduct.colors[0])
		// }
		// if (selectedProduct.size.length > 0) {
		// 	setSelectedSize(selectedProduct.size[0])
		// }
	}, [selectedProduct])

	const increaseQuantity = () => {
		setQuantity(prev=> prev+1)
	}
	const decreaseQuantity = () => {
		if (quantity !== 0) {
			setQuantity(prev=>prev-1)
		}
	}
  const handleAddToCart = () => {
    if(!selectedColor || !selectedSize){
      toast.error("Please select color and size", {
        duration: 1000
      })
      return 
    }
    setIsButtonDisabled(true)
    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000
      })
      setIsButtonDisabled(false)
    }, 1000);
  }

	return (
		<div className='p-6'>
			<div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
				<div className='flex flex-col md:flex-row'>
					{/* Left */}
					<div className='hidden md:flex flex-col space-y-4 mr-6'>
						{selectedProduct.images.map((img, index) => (
							<img
								key={index}
								src={img.url}
								alt={img.alt || `Image ${index}`}
								className={`w-20 h-20 object-cover rounded-lg cursor-pointer border  ${
									mainImage === img.url ? 'border-black' : 'border-gray-300'
								}`}
								onClick={() => setMainImage(img.url)}
							/>
						))}
					</div>
					{/* Main Image */}
					<div className='md:w-1/2'>
						<div className='mb-4'>
							<img
								src={mainImage}
								alt={selectedProduct.images[0]?.alt || 'Image 1'}
								className='w-full h-auto object-cover rounded-lg'
							/>
						</div>
					</div>

					{/* Mobile */}
					<div className='md:hidden flex overflow-x-scroll space-x-4 mb-4'>
						{selectedProduct.images.map((img, index) => (
							<img
								key={index}
								src={img.url}
								alt={img.alt || `Image ${index}`}
								className={`w-20 h-20 object-cover rounded-lg cursor-pointer border  ${
									mainImage === img.url ? 'border-black' : 'border-gray-300'
								}`}
								onClick={() => setMainImage(img.url)}
							/>
						))}
					</div>
					<div className='md:w-1/2 md:ml-10'>
						<h1 className='text-2xl md:text-3xl font-semibold mb-2'>
							{selectedProduct.name}
						</h1>
						<p className='text-lg text-gray-600 mb-1 line-through'>
							{selectedProduct.originalPrice &&
								`${selectedProduct.originalPrice}`}
						</p>
						<p className='text-xl text-gray-500 mb-2'>
							$ {selectedProduct.price}
						</p>
						<p className='text-gray-600 mb-4'>{selectedProduct.description}</p>
						<div className='mb-4'>
							<p className='text-gray-700'>Color: </p>
							<div className='flex gap-2 mt-2'>
								{selectedProduct.colors.map((color, index) => (
									<button
										key={index}
										className={`w-8 h-8 rounded-full border ${
											selectedColor === color
												? 'border-gray-700 border-3 transform scale-105'
												: 'border-gray-400 cursor-pointer'
										}`}
										style={{
											backgroundColor: color.toLocaleLowerCase(),
											filter: 'brightness(0.8)',
										}}
										onClick={() => setSelectedColor(color)}
									></button>
								))}
							</div>
						</div>

						<div className='mb-4'>
							<p className='text-gray-700'>Size:</p>
							<div className='flex gap-2 mt-2'>
								{selectedProduct.size.map((size, index) => (
									<button
										key={index}
										className={`px-4 py-2 rounded border border-gray-500 transition-colors duration-300 ${
											selectedSize === size
												? 'bg-black text-white'
												: 'bg-white text-black cursor-pointer'
										}`}
										onClick={() => setSelectedSize(size)}
									>
										{size}
									</button>
								))}
							</div>
						</div>

						<div className='mb-6 '>
							<p className='text-gray-700'>Quantity:</p>
							<div className='flex items-center space-x-4 mt-2'>
								<button
									className={`px-2 py-1  rounded text-lg ${quantity ===0 ? 'bg-gray-100 text-gray-400' : 'text-black bg-gray-200 cursor-pointer'} `}
									onClick={decreaseQuantity}
								>
									-
								</button>
								<span className='text-lg'>{quantity}</span>
								<button
									className='px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer'
									onClick={increaseQuantity}
								>
									+
								</button>
							</div>
						</div>
						<button onClick={handleAddToCart} disabled={isButtonDisabled} className={` text-white py-2 px-6 rounded w-full mb-4 uppercase transition-colors duration-200  cursor-pointer ${isButtonDisabled ? 'bg-gray-400' : 'bg-black hover:bg-gray-700'} `}>
							{isButtonDisabled ? 'Adding...' : 'Add to cart'}
						</button>
						<div className='mt-10 text-gray-700'>
							<h3 className='text-xl font-bold mb-4 '>Characteristics</h3>
							<table className='w-full text-left text-sm text-gray-600'>
								<tbody>
									<tr>
										<td className='py-1'>Brand</td>
										<td className='py-1'>{selectedProduct.brand}</td>
									</tr>
									<tr>
										<td className='py-1'>Material</td>
										<td className='py-1'>{selectedProduct.material}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
