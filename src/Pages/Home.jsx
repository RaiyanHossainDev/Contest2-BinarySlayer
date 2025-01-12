import React from 'react'
import Banner from '../Components/Banner/Banner'
import Category from '../Components/Category/Category'
import './Home.css'
import Product from '../Components/Product/Product'
import Offers from '../Components/Offers/Offers'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Product />
      <Offers />
    </div>
  )
}

export default Home