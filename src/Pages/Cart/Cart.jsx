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
    const [Selected,setSelected]   = useState([])
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
            update(ref(db,'Cart/' + Product.key),{
                num: Product.num + 1,
            })
        }
    },[Product])

    // =============== Arekta Function Function
    let handleAddToCheck = (currentProduct,isCheck)=>{
            if (Selected.includes(currentProduct.productId) == false) {
                setSelected((prev)=>([...prev,currentProduct.productId]))
            }else{
                const A = Selected.filter(item => item !== currentProduct.productId);
                setSelected(A)
            }
    }

  return (
    <div>
        <div className="container">
            <div className="cart-heading">
                <h1>Your <span> Shopping Cart <IoCartOutline className='inline' /></span></h1>
            </div>
            <div className="cart-list">
                {
                    cartData.map((item)=>(
                    <div onClick={()=>handleAddToCheck(item)} className={
                        `
                         single-cart-item
                         ${Selected.includes(item.productId)&&'!border-[3px] !border-brandColor'}
                        `
                    } key={item.productId}  >
                        {
                            item.productDiscount != "null" &&
                            <div className="cart-discount">
                                <span>{item.productDiscount}</span>
                            </div>
                        }
                        <div className="cart-image">
                            <img width={'200px'} src={item.productImage} alt="" />
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
            {
                Selected.length > 0&&
                <div className="checkOut flex flex-col justify-center mt-[100px] items-center gap-5">
                    <h3 className='text-2xl text-brandColor font-bold'>{Selected.length}</h3>
                    <button
                    className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
                    >
                        <span
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
                        ></span>

                        <span
                            className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                        ></span>

                        <div
                            className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
                        >
                            <span className="select-none">Check Out</span>

                            <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                            >
                            <path
                                clipRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fillRule="evenodd"
                            ></path>
                            </svg>
                        </div>
                    </button>
                </div>
            }
        </div>
    </div>
  )
}

export default Cart