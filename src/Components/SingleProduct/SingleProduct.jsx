import React, { useState } from 'react'
import './SingleProduct.css'
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Viewer from "react-viewer";


const SingleProduct = ({item}) => {
    const [visible, setVisible] = useState(false);
    

    // =========== viewer plugin vari
    const [zoomStyle, setZoomStyle] = useState({});


    // ========================== Redux variables
    const searchProduct  = useSelector(state=>state.search.value)
    const currentProduct = useSelector(state => state.currentProduct?.value)
    const [cover,setCover]          = useState(item?item.productImage:currentProduct?.productImage)


    


  return (
    <section id='singleProductPage'>
        <div className="container">
            <div className="mainProduct_row">
                <div className="product_image">
                    <div className="cover">
                            <img
                                src={item?item.productImage:currentProduct?.productImage}
                                alt="Zoomable"
                                onClick={() => setVisible(true)}
                                style={{ cursor: "pointer" }}
                            />
                            <Viewer
                                visible={visible}
                                onClose={() => setVisible(false)}
                                images={[{ src: item?item.productImage:currentProduct?.productImage, alt: "Zoomed" }]}
                                zoomable // Enable zoom
                            />
                    </div>
                </div>
                <div className="product_text">
                    <div className="title">
                        <h1>{item?item.productName:currentProduct?.productName}</h1>
                        <div className="review">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                        <h2 className="price">
                           {item?item.price:currentProduct?.price}$
                        </h2>
                    </div>
                    <p className="descripttion">
                       {item?item.productDescription:currentProduct?.productDescription}
                    </p>
                    <div className="line"/>
                    <div className="product_buttons">
                        <button className='buy'>Buy Now</button>
                        <button className="single_button">
                            <CiHeart />
                        </button>
                        <button className="single_button">
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct