
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center justify-center
    gap-12 shadow-sm'>
      {  filteredItems.slice(0,8).map((items)=>(
           <div key={items.id}>
<Link to={`/shop/${items.id}`}>
<img src={items.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-200'/>

</Link>
<div className='mt-4 px-4'>
  <h4 className='text-base font-semibold mb-2'>
    {items.title} </h4>
  <div>
    <p className='text-black  justify-between'> {items.category}</p>
    <p className='font-semibold'> ${items.price} </p>
    </div>  

</div>

           </div> )
        )}
        
    </div>
  )
}

export default Card