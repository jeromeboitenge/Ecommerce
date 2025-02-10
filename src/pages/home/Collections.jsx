import React from 'react'

const Collections = () => {
  return (
    <div className='bg-[url("/Images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28
     px-4 my-20'>
      <div className='h-[580px] flex justify-between flex-col md:flex-row  items-center'>
        <div className='md:w-1/2'></div>
        <div className='md:w-1/2'>
        <img src='/Images/zara-logo.png'/>
        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading[32px]'>Lustrows yet understated. The evening wear 
          collectionexclussivelyoffered at the Boitenge Jerome boutique 
          In Kigali Rwanda
           </p>
           <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'> See Collections</button>
        </div>

      </div>
      
     </div>
  )
}

export default Collections