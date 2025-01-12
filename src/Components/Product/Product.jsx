import React from 'react'
import './Product.css'
import Slider from 'react-slick'
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
    dispatcher(productData(item))
    localStorage.setItem('product',JSON.stringify(item))
  }



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};
  return (
    <section id='product'>
        <div className="container">
            <div className="common-heading">
                <h2>Our Latest <span>Products</span></h2>
            </div>
            <div className="product-row">
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><Link to={'/'}><FaPlus /> Add to Cart</Link></button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
              <Link to={"/product"}>
                <div className="product-card">
                  <div className="product-img">
                    <div className="round"></div>
                    <img src="images/category1.png" alt="category" />
                  </div>
                  <div className="product-body">
                    <h2>Black T-shirt</h2>
                    <p>This is a black T-shirta wdaw da dawdawdjkawdjakjwad a wda wdj adj awj awdj</p>
                    <h3>$8.99</h3>
                    <button><FaPlus /> Add to Cart</button>
                  </div>
                </div>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Product