import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/userSlice'
import productfilterSlice from './slice/productfiterSlice'
import offerFilterSlice from './slice/offerFilterSlice'
import searchSlice from './slice/searchSlice'

export default configureStore({
  reducer: {
    currentUser: userSlice,
    currentProductFilter: productfilterSlice,
    currentOfferFilter: offerFilterSlice,
    search: searchSlice,
  },
})