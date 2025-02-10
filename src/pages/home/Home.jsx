import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSeller from './BestSeller'
import NewsLetter from '../NewsLetter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Products/>
      <Collections/>
      <BestSeller/>
      <NewsLetter/>
    </div>
  )
}

export default Home