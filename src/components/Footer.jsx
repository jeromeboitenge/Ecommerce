import React from 'react'
import logo from "/logo.png" // Ensure this path is correct
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div>
        <div className='flex  w-full my-10'>
          <div className='w-1/3'>
            <div>
              <img src={logo} alt="Logo" className='w-20' />
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse neque ipsum tenetur
              commodi animi dolorum quia quisquam voluptatibus. Ipsa fugiat libero at odio inventore
              nostrum expedita velit voluptas nobis porro!
            </div>
            <div className='flex gap-5 title flex-nowrap'>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <section className='flex gap-10 w-full mx-20'>

          <div className='w-1/3'>
            <h1 className='justify-start font-semibold'>Catalog</h1>
            <div className='flex flex-col flex-nowrap justify-start'>
              <Link to="/" className='hover:text-orange-400'>Necklaces</Link>
              <Link to="/" className='hover:text-orange-400'>Hoodies</Link>
              <Link to="/" className='hover:text-orange-400'>Jewelry Box</Link>
              <Link to="/" className='hover:text-orange-400'>T-Shirt</Link>
              <Link to="/" className='hover:text-orange-400'>Jacket</Link>
            </div>
          </div>

          <div className='w-1/3'>
            <h1 className='justify-start font-semibold'>Customer Services</h1>
            <div className='flex flex-col flex-nowrap justify-start'>
              <Link to="/" className='hover:text-orange-400'>Contact Us</Link>
              <Link to="/" className='hover:text-orange-400'>Track Your Order</Link>
              <Link to="/" className='hover:text-orange-400'>Product Care and Repair</Link>
              <Link to="/" className='hover:text-orange-400'>Book an Appointment</Link>
              <Link to="/" className='hover:text-orange-400'>Shopping & Returns</Link>
            </div>
          </div>

          <div className='w-1/3'>
            <h1 className='justify-start font-semibold'>About Us</h1>
            <div className='flex flex-col flex-nowrap justify-start'>
              <Link to="/" className='hover:text-orange-400'>Our Producers</Link>
              <Link to="/" className='hover:text-orange-400'>Sitemap</Link>
              <Link to="/" className='hover:text-orange-400'>FAQ</Link>
              <Link to="/" className='hover:text-orange-400'>About Us</Link>
              <Link to="/" className='hover:text-orange-400'>Terms & Conditions</Link>
            </div>
          </div>
          </section>
        </div>
        <div className="w-full text-center py-4 border-t mt-6">
  <p className="text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} Boitenge. All rights reserved.
  </p>
</div>

      </div>
    </div>
  )
}

export default Footer
