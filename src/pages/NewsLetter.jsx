import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <div>
            <h2 className='title mb-8'>Follow products and discounts
                 on instagram</h2>
                 {/* insta grig */}
                 <div className='flex flex-wrap gap-4 items-center justify-center
                 mb-20'>
                    <Link to="/">
                    <img src='/Images/instagram/img1.png' alt=''/>
                    </Link>
                    <Link to="/">
                    <img src='/Images/instagram/img2.png' alt=''/>
                    </Link>
                    <Link to="/">
                    <img src='/Images/instagram/img3.png' alt=''/>
                    </Link>
                    <Link to="/">
                    <img src='/Images/instagram/img4.png' alt=''/>
                    </Link>
                    <Link to="/">
                    <img src='/Images/instagram/img5.png' alt=''/>
                    </Link>
                    <Link to="/">
                    <img src='/Images/instagram/img6.png' alt=''/>
                    </Link>
                 </div>
                 {/* news letter */}
                 <div>
                   <h2 className='title mb-8'>Or subscribe to the news letter</h2> 
                   <form className='md:w-1/2 mx-auto text-center'>
                    <input type="email" name="email" id="email"  placeholder='Email address'
                    className='h-8 bg-transparent outline-none border-b-2
                     pl-2 border-black md:2-2/3 w-full mb-5
                      placeholder:text-black/50 mr-4'
                      />
                      <input type="submit" value={'submit'} 
                      className='bg-black text-white px-6 py-1 rounded-sm' />
                   </form>
                 </div>
        </div>
    </div>
  )
}

export default NewsLetter