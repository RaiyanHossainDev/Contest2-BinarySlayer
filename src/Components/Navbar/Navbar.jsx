import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { CiShoppingCart } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { RiAccountCircle2Line } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="container">
            <div className="menu_row">
                {/* ================= logo and searchBar start =========== */}
                <div className=' flex gap-16 items-center'>
                    <div className="menu_logo">
                        <Link to={'/'}><img src="images/Logoo.png" width={`160px`} alt="" /></Link>
                    </div>
                    <div className="searchBar">
                        <input type="text" />
                        <button><FiSearch /></button>
                    </div>
                </div>
                {/* ================= logo and searchBar end// =========== */}

                {/* ================= Login and Register start =========== */}
                <div className="authBar">
                    <Link to={'/auth/register'}
                        class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-green-800 rounded-md group"
                        >
                        <span
                            class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                        ></span>
                        <span class="absolute bottom-0 left-0 h-full -ml-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-auto h-full opacity-100 object-stretch"
                            viewBox="0 0 487 487"
                            >
                            <path
                                fill-opacity=".1"
                                fill-rule="nonzero"
                                fill="#FFF"
                                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            ></path>
                            </svg>
                        </span>
                        <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="object-cover w-full h-full"
                            viewBox="0 0 487 487"
                            >
                            <path
                                fill-opacity=".1"
                                fill-rule="nonzero"
                                fill="#FFF"
                                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            ></path>
                            </svg>
                        </span>
                        <span
                            class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-200"
                        ></span>
                        <span class="relative text-base font-semibold">Register</span>
                    </Link>
                    <Link to={'/auth/login'}
                        class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-orange-800 rounded-md group"
                        >
                        <span
                            class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"
                        ></span>
                        <span class="absolute bottom-0 left-0 h-full -ml-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-auto h-full opacity-100 object-stretch"
                            viewBox="0 0 487 487"
                            >
                            <path
                                fill-opacity=".1"
                                fill-rule="nonzero"
                                fill="#FFF"
                                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            ></path>
                            </svg>
                        </span>
                        <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="object-cover w-full h-full"
                            viewBox="0 0 487 487"
                            >
                            <path
                                fill-opacity=".1"
                                fill-rule="nonzero"
                                fill="#FFF"
                                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            ></path>
                            </svg>
                        </span>
                        <span
                            class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange-200"
                        ></span>
                        <span class="relative text-base font-semibold">Login</span>
                    </Link>
                </div>
                {/* ================= Login and Register end// =========== */}

                {/* ================= buttons start ====================== */}
                <div className="mneu_buttons">
                    <Link to='/' ><CiShoppingCart /><span>0</span></Link>
                    <Link to='/' ><FaRegHeart /><span>0</span></Link>
                    <Link to='/' ><RiAccountCircle2Line /></Link>
                </div>
                {/* ================= buttons end// ====================== */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar