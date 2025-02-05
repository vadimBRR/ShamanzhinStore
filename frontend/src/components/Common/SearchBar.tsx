import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const SearchBar = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const handleToggleVisibility = () => {
		setIsVisible(!isVisible)
	}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term:', searchTerm)
  }
	return (
		<div
			className={`flex items-center justify-center w-full transition-all duration-300 ${
				isVisible
					? 'absolute top-0 left-0 w-full border-gray-300  bg-white h-24 z-50'
					: 'w-auto'
			}`}
		>
			{isVisible ? (
				<form className='relative flex items-center justify-center w-full ' onSubmit={handleSubmit}>
					<div className='relative  w-1/2'>
						<input
							type='text'
							placeholder='Search'
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 w-full'
						/>
						<button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 '>
							<HiMagnifyingGlass className='h-6 w-6'/>
						</button>
					</div>

          <div>
            <button onClick={handleToggleVisibility} type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
              <HiMiniXMark className='h-6 w-6'/>
            </button>
          </div>
				</form>
			) : (
				<button onClick={handleToggleVisibility}>
					<HiMagnifyingGlass className='h-6 w-6 text-gray-700' />
				</button>
			)}
		</div>
	)
}

export default SearchBar
