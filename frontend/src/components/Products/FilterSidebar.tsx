import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

type Filter = {
	category: string
	gender: string
	color: string
	size: string[]
	material: string[]
	brand: string[]
	minPrice: number
	maxPrice: number
  [key: string]: any; 
}
const FilterSidebar = () => {
	const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
	const [filters, setFilters] = useState<Filter>({
		category: '',
		gender: '',
		color: '',
		size: [],
		material: [],
		brand: [],
		minPrice: 0,
		maxPrice: 0,
	})

	const [priceRange, setPriceRange] = useState([0, 100])
	const categories = ['Top Wear', 'Bottom Wear']
	const colors = [
		'Red',
		'Blue',
		'Green',
		'Black',
		'White',
		'Yellow',
		'Orange',
		'Purple',
		'Pink',
		'Gray',
		'Brown',
		'Beige',
		'Silver',
	]
	const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
	const materials = [
		'Cotton',
		'Wool',
		'Denim',
		'Polyester',
		'Silk',
		'Linen',
		'Viscose',
		'Fleece',
	]
	const brands = [
		'Urban Threads',
		'Modern Fit',
		'Street Fit',
		'Beach Breeze',
		'Fashionista',
		'ChicStyle',
	]

	const genders = ['Men', 'Women']

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const {name, value, type, checked} = e.target;
    console.log({name, value, checked, type});
    let newFilters = {...filters}

    if(type === 'checkbox'){
      if(checked){
        newFilters[name]= [...(newFilters[name] || []),value]
      } else {
        newFilters[name] = newFilters[name].filter((item:string)=> item!==value)
      }
    } else {
      newFilters[name] = value
    }
    setFilters(newFilters)
    console.log(newFilters);
    updateUrlParams(newFilters)
  }

  const handleColorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color = e.currentTarget.value;
    handleChangeFilter({ target: { name: 'color', value: color, type:'button', checked:undefined} } as any);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value)
    setPriceRange([0, newMaxPrice])
    const newFilters:Filter = {...filters, minPrice: 0, maxPrice: newMaxPrice}
    setFilters(newFilters)
    updateUrlParams(newFilters)
  }

  const updateUrlParams = (newFilters: Filter) => {
    const params = new URLSearchParams()
    Object.keys(newFilters).forEach((key)=> {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key, newFilters[key].join(','))
      }else if (newFilters[key]){
        params.append(key, newFilters[key])
      }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }


	useEffect(() => {
		const params = Object.fromEntries(searchParams)

		setFilters({
			category: params.category || '',
			gender: params.gender || '',
			color: params.color || '',
			size: params.size ? params.size.split(',') : [],
			material: params.material ? params.material.split(',') : [],
			brand: params.brand ? params.brand.split(',') : [],
			minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
			maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 0,
		})
		setPriceRange([
			params.minPrice ? parseInt(params.minPrice) : 0,
			params.maxPrice ? parseInt(params.maxPrice) : 100,
		])
	}, [])

	return (
		<div className='p-4'>
			<h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

			{/* Category */}
			<div className='mb-6'>
				<label className='block text-gray-600 font-medium mb-2'>Category</label>
				{categories.map(category => (
					<div key={category} className='flex items-center mb-1'>
						<input
							type='radio'
							name='category'
              value={category}
              onChange={handleChangeFilter}
              checked={filters.category === category}
							className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
						/>
						<span className='text-gray-700'>{category}</span>
					</div>
				))}
			</div>

			{/* Gender */}
			<div className='mb-6'>
				<label className='block text-gray-600 font-medium mb-2'>Gender</label>
				{genders.map(gender => (
					<div key={gender} className='flex items-center mb-1'>
						<input
							type='radio'
							name='gender'
              value={gender}
              onChange={handleChangeFilter}
              checked={filters.gender === gender}

							className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
						/>
						<span className='text-gray-700'>{gender}</span>
					</div>
				))}
			</div>

			{/* Colors */}
			<div className='mb-6'>
				<label className='block text-gray-600 font-medium mb-2'>Colors</label>
				<div className='flex flex-wrap gap-2'>
					{colors.map(color => (
						<button
							key={color}
							name='color'
              value={color}
              onClick={handleColorClick}
							className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 hover:border-gray-800 ${filters.color === color ? 'ring-2 ring-blue-400': ''}`}
							style={{ backgroundColor: color.toLowerCase() }}
						></button>
					))}
				</div>
			</div>

      {/* Size */}
      <div className="mb-6">
				<label className='block text-gray-600 font-medium mb-2'>Size</label>
        {sizes.map((size)=>(
          <div key={size} className="flex items-center mb-1">
            <input type="checkbox" name='size' className='mr-2 h-4 w-4 text-blue-500 hover:ring-blue-400 border-gray-300 ' value={size} onChange={handleChangeFilter} checked={filters.size.includes(size)}
            />
            <span className='text-gray-700'>
              {size}
            </span>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
				<label className='block text-gray-600 font-medium mb-2'>Material</label>
        {materials.map((material)=>(
          <div key={material} className="flex items-center mb-1">
            <input type="checkbox" name='material' className='mr-2 h-4 w-4 text-blue-500 hover:ring-blue-400 border-gray-300 ' value={material} onChange={handleChangeFilter} checked={filters.material.includes(material)}
            />
            <span className='text-gray-700'>
              {material}
            </span>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
				<label className='block text-gray-600 font-medium mb-2'>Brand</label>
        {brands.map((brand)=>(
          <div key={brand} className="flex items-center mb-1">
            <input type="checkbox" name='brand' className='mr-2 h-4 w-4 text-blue-500 hover:ring-blue-400 border-gray-300 ' value={brand} onChange={handleChangeFilter} checked={filters.brand.includes(brand)}
            />
            <span className='text-gray-700'>
              {brand}
            </span>
          </div>
        ))}
      </div>

      {/* Price range */}
      <div className="mb-8">
				<label className='block text-gray-600 font-medium mb-2'>Price range</label>
        <input type="range" name='priceRange' min={0} max={100} className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer' onChange={handlePriceRangeChange} value={priceRange[1]}/>
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>

      </div>


		</div>
	)
}

export default FilterSidebar
