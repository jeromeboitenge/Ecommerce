import React, { useState } from 'react'
import logo from "/logo.png"
import { Link } from 'react-router-dom';

//icons
import { FaSearch,FaUser,FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
const  [isMenuOpen,setIsMenuOpen]=useState(false)
const togggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
}
    const navItem=[
        {title:'Jewlry & Accessories', path:'/'},
        {title:'Clothing & Shoes', path:'/'},
        {title:'Home & Living', path:'/'},
        {title:'Weeding & Party', path:'/'},
        {title:'Toys & Entertainment', path:'/'},
        {title:'Art & Collections', path:'/'},
        {title:'Craft Supplies & Tools', path:'/'}



    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
    <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
    <FaSearch className='text-[#1E2832] w-5 h-5 cursor-pointer hidden md:block'/>
    {/* logo */}
    <a href='/'><img src={logo} className='w-[100px]'/></a>
    {/* account and shopping button */}
    <div className='text-lg text-[#1E2832] sm:flex items-center gap-4 hidden'>
        <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
        <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shoppings</a>

    </div>
    {/* navbar for sm device */}

<div className='sm:hidden'>
    <button onClick={togggleMenu}>
        {isMenuOpen? <FaTimes className='w-5 text-[#1E2832]'/>: 
        <FaBars className='w-5 text-[#1E2832]'/>}
       
    </button>
</div>
    </nav>
    <hr/>
    {/* categort items */}
    <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-[#1E2832]  hidden' >
             {
                navItem.map(({title,path})=>(
                    <li key={title} className='hover:text-orange-500'>
                        <Link to='/'>{title}</Link>
                    </li>
                ))
             }
        </ul>
    </div>
    {/* only mobile menu items */}
    <div>
    <ul className={`bg-[#1E2832] text-white px-4 py-2 rounded ${isMenuOpen ? "": 'hidden'}`} >
             {
                navItem.map(({title,path})=>(
                    <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                        <Link to='/'>{title}</Link>
                    </li>
                ))
             }
        </ul>

    </div>

    </header>
  )
}

export default Navbar