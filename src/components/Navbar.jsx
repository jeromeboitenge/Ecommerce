import React from 'react'
import logo from "/logo.png"

//icons
import { FaSearch,FaUser,FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
    const navItem=[{
        title:'jewwlry and Accessories',
        path:''
    }]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4'>
    <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
    <FaSearch />
    {/* logo */}
    <a href='/'><img src={logo} className='w-[100px]'/></a>
    {/* account and shopping button */}
    <div className='text-lg text-[#1E2832] sm:flex items-center gap-4 hidden'>
        <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
        <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shoppings</a>

    </div>

    </nav>
    <hr/>
    {/* categort items */}
    </header>
  )
}

export default Navbar