import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { productData } from '../../slice/productSlice'

const Product = () => {
  // ========================= custom variabls



  // ========================= Redux variables
  const dispatcher = useDispatch()


  // ======================================== All function
  // ========== product function
  let handleProduct = (item)=>{
    console.log('click to hoitase');
    
    localStorage.setItem('product',JSON.stringify(item))
    dispatcher(productData(item))
  }



  // ========================= API
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
                  <Link onClick={()=>handleProduct(item)} key={item.productId} to={"/product"}>
                    <div className="product-card">
                      <div className="product-img">
                        <div className="round"></div>
                        <img src={item.productImage} alt="category" />
                      </div>
                      <div className="product-body">
                        <h2> {item.productName} </h2>
                        <p>{item.productDescription}</p>
                        <h3>{item.price}$</h3>
                        <button><Link to={'/'}><FaPlus /> Add to Cart</Link></button>
                      </div>
                    </div>
                </Link>
                ))
              }
            </div>
        </div>
    </section>
  )
}
export default Product