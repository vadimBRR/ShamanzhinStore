import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar'
import SortOptions from '../components/Products/SortOptions'
import ProductGrid from '../components/Products/ProductGrid'

type Product = {
	_id: number
	name: string
	price: number
	images: {
		url: string
		alt: string
	}[]
}
const CollectionPage = () => {
	const [products, setProducts] = useState<Product[]>([])
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target as Node)){
      setIsSidebarVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown',handleClickOutside)
  
    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }
  }, [])
  
	useEffect(() => {
		setTimeout(() => {
			const fetchedProducts: Product[] = [
				{
					_id: 1,
					name: 'Product 1',
					price: 100,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=1',
							alt: 'Product 1',
						},
					],
				},
				{
					_id: 2,
					name: 'Product 2',
					price: 200,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=2',
							alt: 'Product 2',
						},
					],
				},
				{
					_id: 3,
					name: 'Product 3',
					price: 300,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=3',
							alt: 'Product 3',
						},
					],
				},
				{
					_id: 4,
					name: 'Product 4',
					price: 400,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=4',
							alt: 'Product 4',
						},
					],
				},
				{
					_id: 5,
					name: 'Product 5',
					price: 100,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=5',
							alt: 'Product 5',
						},
					],
				},
				{
					_id: 6,
					name: 'Product 6',
					price: 200,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=6',
							alt: 'Product 6',
						},
					],
				},
				{
					_id: 7,
					name: 'Product 7',
					price: 300,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=7',
							alt: 'Product 7',
						},
					],
				},
				{
					_id: 8,
					name: 'Product 8',
					price: 400,
					images: [
						{
							url: 'https://picsum.photos/500/500?random=8',
							alt: 'Product 8',
						},
					],
				},
			]

			setProducts(fetchedProducts)
		}, 1000)
	}, [])

	return (
		<div className='flex flex-col lg:flex-row'>
			{/* Left Buttons */}
			<button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
				<FaFilter className='mr-2'/> Filters
			</button>
      {/* SideBar */}
      <div ref={sidebarRef} className={`${isSidebarVisible ? 'translate-x-0': '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`} >
        <FilterSidebar/>
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort */}
        <SortOptions/>

        {/* Products */}
        <ProductGrid products={products}/>
      </div>
		</div>
	)
}

export default CollectionPage
