import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const TopBar = () => {
  return (
    <div className='bg-red-400 text-white '>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>
        <div className='hidden md:flex items-center space-x-4'>
          <a href="#" className='hover:text-gray-300'>
            <TbBrandMeta className='h-5 w-5'/>
          </a>
          <a href="#" className='hover:text-gray-300'>
            <IoLogoInstagram  className='h-5 w-5'/>
          </a>
          <a href="#" className='hover:text-gray-300'>
            <RiTwitterLine  className='h-4 w-4'/>
          </a>
        </div>
        <div className='text-sm text-center flex-grow'>
          <span>We ship Worldwide - Fast and reliable shipping!</span>
        </div>
        <div className='hidden md:block text-sm'>
          <a href= 'tel:+1 (800) 123-4567' className='hover:text-gray-300'>+1 (800) 123-4567</a>
        </div>

      </div>
    </div>
  )
}

export default TopBar