import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';

const SingleProducts = () => {
    const {id}=useParams();
  const [products,setProducts]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/products.json');
                const data = await res.json();
                const product=data.filter((p)=>p.id==id)
                // console.log(product)
                setProducts(product[0]);
            } catch (err) {
                console.log('Error fetching data', err);
            }
        };
        fetchData();
        window.scrollTo({top: 0,behavior:'smooth'})
    }, [id]);

    const {title,category,price,image,status}=products

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='p-3 max-w-7xl m-auto'>
            <div className='mt-5'>
            <a href="/" className='text-gray-600'>Home</a>
            <a href="/shop" className='font-bold text-black'>/Shop</a>
            </div>
        
           <div className='mt-6 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                <div>
                   <img src={image} alt="" className='w-full'/> 
                </div>
                {/* products detail */}

<div>
<h1 className='title text-left'>{title}</h1>
            <p className='mt-3 text-gray-500 text-base leading-6 text-justify sm:text-left
            sm:mt-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aut totam fugiat 
                ratione sequi voluptates, quod omnis quibusdam molestias esse fuga ab corporis quidem
                 nostrum itaque voluptatibus asperiores aperiam similique?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit quasi quaerat 
                 deleniti aliquam quibusdam consequatur odio cum perspiciatis suscipit. Repellat quia earum 
                 adipisci dolorum impedit dolores qui magnam ut.</p>
                 <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                 </span>
                 <p className='text-xl text-red-500 sm:text-2xl'> ${price}</p>
                 <div className='mt-3'>
                    <div className='text-left flex flex-col gap-2 w-full'>
                        <label className='font-semibold'>Quantity</label>
                        <input type="number" name='price' id='price' defaultValue={1} recquired
                         className='border border-gray-300 text-sm font-semibold mb-1 max-w-full 
                         w-full outline-none rounded-md m-0 px-4 md:py-3 py-3 md:px-4 focus:border-red-500' />
                    </div>
                    <div className='w-full text-left my-4'>
                        <button className='flex justify-center items-center gap-2 w-full py-3
                        px-4 bg-red-500 text-white font-bold border-red-500 rounded-md
                         ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500
                        lg:m-0 md:px-6'>COnfirm Order <span><FaArrowAltCircleRight/></span></button>
                    </div>
                 </div>
</div>
            </div>
          
            </div> 
            <div className='text-black/75 mt-12'> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                     quia porro quas non, quidem error ipsum? Expedita atque molestias beatae.
                      Qui corrupti eum obcaecati iusto temporibus libero, repellendus harum quae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                     quia porro quas non, quidem error ipsum? Expedita atque molestias beatae.
                      Qui corrupti eum obcaecati iusto temporibus libero, repellendus harum quae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                     quia porro quas non, quidem error ipsum? Expedita atque molestias beatae.
                      Qui corrupti eum obcaecati iusto temporibus libero, repellendus harum quae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                     quia porro quas non, quidem error ipsum? Expedita atque molestias beatae.
                      Qui corrupti eum obcaecati iusto temporibus libero, repellendus harum quae.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SingleProducts