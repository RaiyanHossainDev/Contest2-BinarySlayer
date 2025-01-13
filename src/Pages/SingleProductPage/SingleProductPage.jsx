import React, { useState } from 'react'
import './SingleProductPage.css'
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Viewer from "react-viewer";
import { FaHeart, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';



const SingleProduct = ({item}) => {
    window.scrollTo(0, 0);
    const [visible, setVisible] = useState(false);
    // =========== viewer plugin vari
    const [zoomStyle, setZoomStyle] = useState({});
    // ========================== Redux variables
    const searchProduct  = useSelector(state=>state.search.value)
    const currentProduct = useSelector(state=>state.currentProduct?.value)
    const [cover,setCover] = useState(item?item.productImage:currentProduct?.productImage)
    //  ============== Functions
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
        }
        return stars;
    };
  return (
    <section id='singleProductPage'>
        <div className="container">
            <div className="mainProduct_row">
                {
                item?item.productDiscount:currentProduct?.productDiscount&&
                <div className="offerTag">
                    <span>{item?item.productDiscount:currentProduct?.productDiscount}</span>
                </div>
                }
                <div className="product_image">
                    <div className="cover flex justify-center">
                            <img
                                src={item?item.productImage:currentProduct?.productImage}
                                alt="Zoomable"
                                onClick={()=>setVisible(true)}
                                style={{cursor: "pointer", maxWidth: "100%", maxHeight: "100%"}}
                            />
                            <Viewer
                                visible={visible}
                                onClose={()=>setVisible(false)}
                                images={[{ src: item?item.productImage:currentProduct?.productImage, alt: "Zoomed" }]}
                                zoomable // Enable zoom
                            />
                    </div>
                </div>
                <div className="product_text">
                    <div className="title">
                        <h1>{item?item.productName:currentProduct?.productName}</h1>
                        <div className="review">
                            {renderStars(item?item.productName:currentProduct?.productRating)}
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
                            <FaHeart />
                        </button>
                        <button className="single_button">
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct