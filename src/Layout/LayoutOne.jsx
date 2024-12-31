import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutOne = () => {
  // ============ variables
  const currentUser = useSelector(state=>state.currentUser.value)
  const navigator = useNavigate()



  useEffect(()=>{
    if (currentUser == null) {
      navigator('/auth/login')
    }
  },[])
  
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayoutOne