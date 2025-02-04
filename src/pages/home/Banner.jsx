import React from 'react'
import bannerImg from '/Images/banner.png'
import { FaBagShopping } from "react-icons/fa6";


const Banner = () => {
  return (
    <div className='bg-[#1e28320d] py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
          
        <div className='md:w-1/2'>
            <img src={bannerImg} alt="" />

            </div>
          <div className='md:w-1/2'>
          <h1 className='text-5xl font-light mb-5 '>Collection</h1>
            <p className='text-xl mb-7'>
              You can explore and shop many differnt collection
              from various branda here
            </p>
            <button className=
            'bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
              <FaBagShopping className='inline-flex'/>Shop now</button>

          </div>
          
        </div>
    </div>
  )
}

export default Banner