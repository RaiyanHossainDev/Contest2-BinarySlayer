import React, { useEffect, useState } from 'react'
import './CategoryPage.css'
import { FaPlus, FaSitemap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productFilter } from '../../slice/productfiterSlice'
import SingleProduct from '../../Components/SingleProduct/SingleProduct'

const CategoryPage = () => {
    const CategoryFilter = useSelector((state)=>state.currentProductFilter.value)
    const dispatch = useDispatch()
    const [productData,setProductData] = useState([])
    const [allProductData,setAllProductData] = useState([])
    const options = document.querySelectorAll(".categorySelect option")
    useEffect(()=>{
        fetch('https://api.jsonbin.io/v3/b/677d420aad19ca34f8e7076f')
            .then(response => response.json())
            .then((json) => {
              setAllProductData(json.record);
              const filteredProducts =
                CategoryFilter == "null"
                  ? json.record
                  : json.record.filter(
                      (product) => product.productCategory === CategoryFilter
                  );
              setProductData(filteredProducts);
          })
    },[CategoryFilter])
    const handleSelect = (e)=>{
      dispatch(productFilter(e.target.value))
    }
    useEffect(()=>{      
      if (CategoryFilter != "null") {
        options.forEach((item)=>{
          if (item.value == CategoryFilter) {
            item.setAttribute("selected","selected")
          }
          else{
            item.removeAttribute("selected","selected")
          }
        })
      }
    },[CategoryFilter,options])
  return (
    <div>
        <div className="container">
            <div className="category-heading flex justify-between items-center">
                <h1>{CategoryFilter} <span>Items <FaSitemap className='inline' /></span></h1>
                <select className='categorySelect' onChange={handleSelect}>
                  <option value="null">All</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronic">Electronics</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Furnitures">Furnitures</option>
                  <option value="Cars">Cars</option>
                </select>
            </div>
            <div className="category-row flex justify-center gap-[30px] flex-wrap">
              {
                productData.map((item)=>(
                  <SingleProduct item={item}/>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default CategoryPage