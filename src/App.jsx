
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import LayoutAuth from './Layout/LayoutAuth'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path='/auth' element={<LayoutAuth/>}>
          <Route path='/auth/login' element={<Login/>} />
          <Route path='/auth/register' element={<Register/>} />
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
