import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutOne = () => {
  // ============ variables
  const currentUser = useSelector(state=>state.currentUser.value)
  const navigator = useNavigate()
  
  return (
    <div>
        <Navbar/>
        <div className="mt-[180px]">
          <Outlet/>
        </div>
    </div>
  )
}

export default LayoutOne