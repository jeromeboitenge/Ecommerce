import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa6'
import Card from './Card'

const Products = () => {
    const [products,setProducts]=useState([''])
    useEffect(()=>{
        const fetchData=async()=>{
           try{
            const res=await fetch('/products.json')
const data=await res.json()
setProducts(data)
           } 
           catch(err){
            console.log('error fetching data ',err)

           }
        }
        fetchData()
    },[])
    console.log(products)
  return (
    <div className='max-w-screen-2xl container mix-auto xl:px-28 mb:12'>
        
<h2 className="title">or subscribe to the news letter</h2>

{/* products cards */}
<div>
<div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
    {/* all buttons */}
   <div className='flex flex-row justify-start md:items-center md:gap-8 flex-wrap'>
    <button>All Products</button>
    <button>Clothing</button>
    <button>Hoodies</button>
    <button>Bag</button>
    
    </div> 
    {/* sorting options */}
    <div className='flex justify-end mb-4 rounded-sm'>
        <div className='bg-black p-2'>
            <FaFilter className='text-white h-4 w-4'/>
        </div>
        <select className='bg-black text-white px-2 py-1 rounded-sm'>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="A-Z">A-Z</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
        </select>
        </div>
    </div>
<Card filteredItems={products}/>

</div>

        </div>
  )
}

export default Products