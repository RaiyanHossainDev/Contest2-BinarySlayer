import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaPlus } from 'react-icons/fa'
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux'
import { Slide, toast } from 'react-toastify'
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
  const [productData,setProductData] = useState([])
  useEffect(()=>{
      fetch('https://api.jsonbin.io/v3/b/677d420aad19ca34f8e7076f')
          .then(response => response.json())
          .then(json => setProductData(json.record))
  },[])
  return (
    <section id='product'>
        <div className="container">
            <div className="common-heading">
                <h2>Our Latest <span>Products</span></h2>
            </div>
            <div className="product-row">
              {
                productData.map((item)=>(
                  <SingleProduct item={item}/>
                ))
              }
            </div>
        </div>
    </section>
  )
}
export default Product