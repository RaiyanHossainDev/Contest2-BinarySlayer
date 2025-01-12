import React, { useState } from 'react'
import './SingleProduct.css'
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';


const SingleProduct = () => {
    const [zoomStyle, setZoomStyle] = useState({});
    const [cover,setCover]          = useState('images/singleProductCover.jpg')




    




    // ============================================== Zoom Function
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoomStyle({
        transformOrigin: `${x}% ${y}%`,
        transform: "scale(2)", // Adjust zoom level
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ transform: "scale(1)", transformOrigin: "center center" });
    };


  return (
    <section id='singleProductPage'>
        <div className="container">
            <div className="mainProduct_row">
                <div className="product_image">
                    <div className="cover">
                            <div
                            className="zoom-container"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            >
                            <img
                                src={`${cover}`}
                                alt="Zoomable"
                                className="zoom-image"
                                style={zoomStyle}
                            />
                            </div>
                    </div>
                    <div className="imageSelection">
                        <img onClick={()=>setCover('images/singleProductCover.jpg')} src="images/singleProductCover.jpg" alt="" />
                        <img onClick={()=>setCover('images/selection.jpg')} src="images/selection.jpg" alt="" />
                    </div>
                </div>
                <div className="product_text">
                    <div className="title">
                        <h1>Floating Phone</h1>
                        <div className="review">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                        <h2 className="price">
                            $1,139.33
                        </h2>
                    </div>
                    <p className="descripttion">
                        Met minim Mollie non desert Alamo est sit cliquey dolor 
                        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                        Excitation venial consequent sent nostrum met.
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