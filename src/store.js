import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/userSlice'
import  productSlice  from './slice/productSlice'

export default configureStore({
  reducer: {
    currentUser: userSlice,
    currentProduct: productSlice,
  },
})