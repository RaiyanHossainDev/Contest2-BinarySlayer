import React, { useEffect, useState } from 'react'
import './Cart.css'
import { getDatabase, onValue, ref, remove, update } from "firebase/database";
import { IoCartOutline } from 'react-icons/io5'
import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Cart = () => {
    const currentUser = useSelector((state)=>state.currentUser.value)
    const [cartData,setCartData] = useState([])
    const [Product,setCurrentProduct] = useState([])
    const db = getDatabase();
    // ==


    useEffect(()=>{
        onValue(ref(db, 'Cart/'), (snapshot) => {
            let array = []
            snapshot.forEach((item)=>{
                if (item.val().userId == currentUser.uid) {
                    array.push({...item.val(),key:item.key})
                }
            })
            setCartData(array)
        });
    },[])

    const handleCartRemove = (currentProduct)=>{
        remove(ref(db, 'Cart/' + currentProduct.key))
    }
    window.scrollTo(0, 0)



    // ============= Function
    let handleMath = (currentProduct,sign)=>{
        if (sign === '-') {
            update(ref(db,'Cart/' + currentProduct.key),{
                num: currentProduct.num - 1,
            })
        }
        if (sign === '+') {
            update(ref(db,'Cart/' + currentProduct.key),{
                num: currentProduct.num + 1,
            })
        }
    }
    useEffect(()=>{
        if (Product.num < 1) {
            console.log('aise');
            
            update(ref(db,'Cart/' + Product.key),{
                num: Product.num + 1,
            })
        }
    },[Product])
    console.log(Product);
    

  return (
    <div>
        <div className="container">
            <div className="cart-heading">
                <h1>Your <span> Shopping Cart <IoCartOutline className='inline' /></span></h1>
            </div>
            <div className="cart-list">
                {
                    cartData.map((item)=>(
                    <div className="single-cart-item" key={item.productId}>
                        {
                            item.productDiscount != "null" &&
                            <div className="cart-discount">
                                <span>{item.productDiscount}</span>
                            </div>
                        }
                        <div className="cart-image">
                            <img src={item.productImage} alt="" />
                        </div>
                        <div className="cart-text">
                            <h2>{item.productName}</h2>
                            <p>{item.productDescription}</p>
                        </div>
                        <div className="cart-info">
                            <h2>${item.price}</h2>
                            <button className='cart-remove' onClick={()=>handleCartRemove(item)}>Remove <FaRegTrashAlt /></button>
                            <div className="cart-count">
                                <button onClick={()=>{handleMath(item,'+'),setCurrentProduct(item)}}><FaPlus /></button>
                                <h3>{item.num}</h3>
                                <button onClick={()=>{handleMath(item,'-'),setCurrentProduct(item)}}><FaMinus /></button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className="checkOut">
                
            </div>
        </div>
    </div>
  )
}

export default Cart