import React, { useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
	const scrollRef = React.useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = React.useState(false)
	const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)
	const [canScrollLeft, setCanScrollLeft] = React.useState(false)
	const [canScrollRight, setCanScrollRight] = React.useState(false)
	const products = [
		{
			_id: 1,
			name: 'T-shirt',
			price: 120,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=1',
					alt: 'T-shirt',
				},
			],
		},
		{
			_id: 2,
			name: 'Jeans',
			price: 150,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=2',
					alt: 'Jeans',
				},
			],
		},
		{
			_id: 3,
			name: 'Shirt',
			price: 100,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=3',
					alt: 'Shirt',
				},
			],
		},
		{
			_id: 4,
			name: 'Jacket',
			price: 200,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=4',
					alt: 'Jacket',
				},
			],
		},
		{
			_id: 5,
			name: 'Socks',
			price: 80,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=5',
					alt: 'Socks',
				},
			],
		},
		{
			_id: 6,
			name: 'Shoes',
			price: 180,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=6',
					alt: 'Shoes',
				},
			],
		},
		{
			_id: 7,
			name: 'Bag',
			price: 220,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=7',
					alt: 'Bag',
				},
			],
		},
		{
			_id: 8,
			name: 'Sweater',
			price: 160,
			images: [
				{
					url: 'https://picsum.photos/500/500?random=8',
					alt: 'Sweater',
				},
			],
		},
	]

	const handleScroll = (direction: 'left' | 'right') => {
		const scrollAmount = direction === 'left' ? -300 : 300
		scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
	}

	const handleMouseDown = (e:React.MouseEvent<HTMLDivElement> ) => {
    if(scrollRef.current){
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)

    }
  }

	const handleMouseMove = (e:React.MouseEvent<HTMLDivElement> ) => {
    if(!isDragging) return 
    if(scrollRef.current){
      const x = e.pageX - scrollRef.current.offsetLeft
      const walk = x - startX;
      scrollRef.current.scrollLeft= scrollLeft - walk

    }
  }
	const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

	const updateScrollButtons = () => {
		const container = scrollRef.current
		if (container) {
			setCanScrollLeft(container.scrollLeft > 0)
			setCanScrollRight(
				container.scrollWidth - 1 > container.clientWidth + container.scrollLeft
			)
		}
	}

	useEffect(() => {
		const container = scrollRef.current
		if (container) {
			container.addEventListener('scroll', updateScrollButtons)
			updateScrollButtons()
      return () => container.removeEventListener('scroll', updateScrollButtons)
		}
	}, [])
	return (
		<section className='py-16 px-4 lg:px-0'>
			<div className='container mx-auto text-center mb-10 relative'>
				<h2 className='text-3xl font-bold mb-4'>Explore Our New Arrivals</h2>
				<p className='text-lg text-gray-500 mb-8'>
					Shop with us and get the best deals on our products.
				</p>

				{/* Buttons */}
				<div className='absolute right-0 bottom-[-30px] flex space-x-2'>
					<button
						className={`p-2 rounded border  transition-all ${
							canScrollLeft
								? 'bg-white hover:bg-gray-200 text-black'
								: 'bg-gray-200 text-gray-400 cursor-not-allowed'
						}`}
						onClick={() => handleScroll('left')}
					>
						<FiChevronLeft className='text-2xl ' />
					</button>
					<button
						className={`p-2 rounded border  transition-all ${
							canScrollRight
								? 'bg-white hover:bg-gray-200 text-black'
								: 'bg-gray-200 text-gray-400 cursor-not-allowed'
						}`}
						onClick={() => handleScroll('right')}
					>
						<FiChevronRight className='text-2xl ' />
					</button>
				</div>
			</div>

			{/* Content */}
			<div
				ref={scrollRef}
				className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUpOrLeave}
				onMouseLeave={handleMouseUpOrLeave}
			>
				{products.map(product => (
					<div
						key={product._id}
						className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'
					>
						<img
							src={product.images[0].url|| ''}
							alt={product.images[0].alt || product.name}
							className='w-full h-[500px] object-cover rounded-lg'
              draggable={false}
						/>
						<div className='absolute bottom-0 left-0 right-0 backdrop-blur-md p-4 text-white rounded-b-lg'>
							<Link to={`/product/${product._id}`} className='block'>
								<h4 className='font-medium '>{product.name}</h4>
								<p className='mt-1'>{product.price}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default NewArrivals
