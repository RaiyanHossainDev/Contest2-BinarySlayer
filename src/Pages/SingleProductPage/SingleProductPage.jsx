import React, { useEffect, useState } from 'react'
import './SingleProductPage.css'
import { TiStarFullOutline } from "react-icons/ti";
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector,useDispatch } from 'react-redux';
import Viewer from "react-viewer";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { Slide, toast } from 'react-toastify';


const SingleProduct = ({item}) => {
    window.scrollTo(0, 0);
    const [visible, setVisible] = useState(false);
    const db = getDatabase();
    const [localCart, setLocalCart] = useState([]);
    const [localFavorites, setLocalFavorites] = useState([]);
    const data = item
    // =========== viewer plugin vari
    const [zoomStyle, setZoomStyle] = useState({});
    // ========================== Redux variables
    const currentUser = useSelector((state)=>state.currentUser.value)
    const searchProduct  = useSelector(state=>state.search.value)
    const currentProduct = useSelector(state=>state.currentProduct?.value)
    const [cover,setCover] = useState(item?item.productImage:currentProduct?.productImage)




// Add to cart
const handleAddToCart = (currentProduct) => {
    if (currentUser == null) {
        toast.error('User not logged in', {
        position: "bottom-center",
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
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
    });
}else {
    const db = getDatabase();
    set(push(ref(db, 'Cart/')), {
        productId: currentProduct.productId,
        productName: currentProduct.productName,
        productDescription: currentProduct.productDescription,
        productImage: currentProduct.productImage,
        productDiscount: currentProduct.productDiscount || null,
        productCategory: currentProduct.productCategory,
        price: currentProduct.price,
        userId: currentUser.uid,
        num: 1,
    });
    setLocalCart(prevCart => [...prevCart, currentProduct]);
    toast.success('New item added to your cart', {
        position: "bottom-center",
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
// Add to favorites
useEffect(() => {
const favRef = ref(db, 'Favorite/');
onValue(favRef, (snapshot) => {
    let arr = []

    snapshot.forEach((item)=>{
        if (item.val().userId === currentUser.uid) {
            arr.push(item.val())
        }
    })
setLocalFavorites(arr)
});

onValue(ref(db, "Cart/"), (snapshot) => {
    let arr = []

    snapshot.forEach((item)=>{
        if (item.val().userId === currentUser.uid) {
            arr.push(item.val())
        }
    })
    setLocalCart(arr); 
});
}, []);



// ====================== Fav Function
const handleAddToFav = (currentProduct) => {
if (currentUser == null) {
    toast.error('User not logged in', {
    position: "bottom-center",
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
const alreadyInFavorites = localFavorites.some(item => item.productId === currentProduct.productId);
if (alreadyInFavorites) {
    toast.error('You already added this to your favorites', {
    position: "bottom-center",
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
    set(push(ref(db, 'Favorite/')), {
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
    position: "bottom-center",
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
                            {
                                item?item.productRating:currentProduct?.productRating == 5&&
                                <>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                </>
                                
                            }
                            {
                                item?item.productRating:currentProduct?.productRating == 4&&
                                <>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                </>
                            }
                            {
                                item?item.productRating:currentProduct?.productRating == 3&&
                                <>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                </>
                            }
                            {
                                item?item.productRating:currentProduct?.productRating == 2&&
                                <>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                </>
                            }
                            {
                                item?item.productRating:currentProduct?.productRating == 1&&
                                <>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                </>
                            }
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
                        <button onClick={()=>handleAddToFav(currentProduct)} className="single_button">
                            <FaHeart />
                        </button>
                        <button onClick={()=>handleAddToCart(currentProduct)} className="single_button">
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




