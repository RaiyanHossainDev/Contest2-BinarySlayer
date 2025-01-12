import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { productFilter } from '../../slice/productfiterSlice';

const Category = () => {
    const dispatch = useDispatch()
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
return (
    <section id='category'>
        <div className="container">
            <div className="common-heading">
                <h2><span>Trending</span> Categories</h2>
            </div>
            <div className="category-row">
                <Slider {...settings}>
                    <div className='category-wrap'>
                        <div className="category-card">
                            <div className="category-overlay">
                                <Link to={"/category"} onClick={()=>dispatch(productFilter("Clothing"))}>T-shirt</Link>
                            </div>
                            <div className="round"></div>
                            <img src="images/category1.png" alt="category" />
                        </div>
                    </div>
                    <div className='category-wrap'>
                        <div className="category-card">
                            <div className="category-overlay">
                                <Link to={"/category"} onClick={()=>dispatch(productFilter("Electronic"))}>Electronics</Link>
                            </div>
                            <img src="images/category2.png" alt="category" />
                            <div className="round"></div>
                        </div>
                    </div>
                    <div className='category-wrap'>
                        <div className="category-card">
                            <div className="category-overlay">
                                <Link to={"/category"} onClick={()=>dispatch(productFilter("Beauty"))}>Beauty</Link>
                            </div>
                            <img src="images/category3.png" alt="category" />
                            <div className="round"></div>
                        </div>
                    </div>
                    <div className='category-wrap'>
                        <div className="category-card">
                            <div className="category-overlay">
                                <Link to={"/category"} onClick={()=>dispatch(productFilter("Furnitures"))}>Furnitures</Link>
                            </div>
                            <img src="images/category4.png" alt="category" />
                            <div className="round"></div>
                        </div>
                    </div>
                    <div className='category-wrap'>
                        <div className="category-card">
                            <div className="category-overlay">
                                <Link to={"/category"} onClick={()=>dispatch(productFilter("Cars"))}>Cars</Link>
                            </div>
                            <img src="images/category5.png" alt="category" />
                            <div className="round"></div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Category