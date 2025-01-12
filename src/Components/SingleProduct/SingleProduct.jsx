import React from 'react'
import { FaPlus, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './SingleProduct.css'
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { Slide, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SingleProduct = ({item}) => {
    const currentUser = useSelector((state)=>state.currentUser.value)
    const [localCart, setLocalCart] = useState([]);
    const [localFavorites, setLocalFavorites] = useState([]);
useEffect(() => {
    const db = getDatabase();
    const cartRef = ref(db, 'Cart/');
    onValue(cartRef, (snapshot) => {
        if (snapshot.val() != null) {
        const userCart = Object.values(snapshot.val()).filter(
            item => item.userId === currentUser.uid
        );
        setLocalCart(userCart); 
        }
    });
    }, []);
    const handleAddToCart = (currentProduct) => {
    if (currentUser == null) {
        toast.error('User not logged in', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
        return;
    }
    const alreadyInCart = localCart.some(item => item.productId === currentProduct.productId);
    if (alreadyInCart) {
        toast.error('You already added this to your cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    } else {
        const db = getDatabase();
        set(push(ref(db, 'Cart/')), {
        productId: currentProduct.productId,
        productName: currentProduct.productName,
        productDescription: currentProduct.productDescription,
        productImage: currentProduct.productImage,
        productDiscount: currentProduct.productDiscount || "null",
        productCategory: currentProduct.productCategory,
        price: currentProduct.price,
        userId: currentUser.uid,
        });
        setLocalCart(prevCart => [...prevCart, currentProduct]);
        toast.success('New item added to your cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    }
    };
    useEffect(() => {
    const db = getDatabase();
    const favRef = ref(db, 'Favorite/');
    onValue(favRef, (snapshot) => {
        const userCart = Object.values(snapshot.val()).filter(
        item => item.userId === currentUser.uid
        );
        setLocalCart(userCart); 
    });
    }, []);
    const handleAddToFav = (currentProduct) => {
    if (currentUser == null) {
        console.log("User not logged in");
        return;
    }
    const alreadyInFavorites = localFavorites.some(item => item.productId === currentProduct.productId);
    if (alreadyInFavorites) {
        toast.error('You already added this to your favorites', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    } else {
        // Add product to Firebase favorites and update localFavorites state
        const db = getDatabase();
        set(ref(db, 'Favorite/' + currentProduct.productId), {
        productId: currentProduct.productId,
        productName: currentProduct.productName,
        productDescription: currentProduct.productDescription,
        productImage: currentProduct.productImage,
        productDiscount: currentProduct.productDiscount || "null",
        productCategory: currentProduct.productCategory,
        price: currentProduct.price,
        userId: currentUser.uid,
        });
        setLocalFavorites(prevFavorites => [...prevFavorites, currentProduct]);
        toast.success('New item added to your favorites', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    }
    };
  return (
    <Link to={"#"} key={item.productId}>
        <div className="product-card">
        <div className="product-img">
            <div className="round"></div>
            <img src={item.productImage} alt="category" />
        </div>
        <div className="product-body">
            <h2>{item.productName}</h2>
            <p>{item.productDescription}</p>
            <h3>${item.price}</h3>
            <div className="flex gap-[5px]">
            <button onClick={()=>handleAddToCart(item)}><FaPlus /> Add to Cart</button>
            <button onClick={()=>handleAddToFav(item)} className='!p-[10px]'><FaHeart /></button>
            {item.productDiscount &&          
            <div className="offerTag">
                <span>{item.productDiscount}</span>
            </div>
            }
            </div>
        </div>
        </div>
    </Link>
  )
}

export default SingleProduct