import React, { useEffect, useState } from 'react'
import './Register.css'
import { MdLockOutline, MdMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import sideImg from '../../assets/images/login-img.png'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { BiSolidError } from 'react-icons/bi'
import { RiAccountCircleLine } from 'react-icons/ri'
import logo from '../../assets/images/Logoo.png'



const Register = () => {
  // ============================== custom useStates ////
  const [input,setInput]         = useState({email:'',pass:'',username:''})
  const [iconColor,setIconColor] = useState({emailColor:'text-[#121826]',passColor:'text-[#121826]',nameColor:'text-[#121826]',buttonColor:'bg-[#121826]',buttonTextColor:'text-[#6C727F]'})
  const [eye,setEye]             = useState(false)
  const [error,setError]         = useState({email:'transparent',password:'transparent',username:'transparent',auth:false})

  

  // ============================ All Functions
  // ============== regiser Function
  let handleRegister = (e)=>{
    // ====== prevnting default
    e.preventDefault()
    // =========================== making validations
    if(input.username == ''){
      setError((prev)=>({...prev,username:'red'}))
    }else if (input.email == '') {
      setError((prev)=>({...prev,email:'red'}))
    }else if(input.pass == ''){
      setError((prev)=>({...prev,password:'red'}))
    }else{
      // ========================= 
    }
  }


  // ================================ changing icons colors ////////////////////
  useEffect(()=>{
    if (input.email) {
      setIconColor((prev)=>({...prev,emailColor:'text-[#B1E457]'}))
    }else{
      setIconColor((prev)=>({...prev,emailColor:'text-[#121826]'}))
    }
    if (input.pass) {
      setIconColor((prev)=>({...prev,passColor:'text-[#B1E457]'}))
    }else{
      setIconColor((prev)=>({...prev,passColor:'text-[#121826]'}))
    }
    if (input.username) {
      setIconColor((prev)=>({...prev,nameColor:'text-[#B1E457]'}))
    }else{
      setIconColor((prev)=>({...prev,nameColor:'text-[#121826]'}))
    }

    if (input.email && input.pass && input.username) {
      setIconColor((prev)=>({...prev,buttonColor:'bg-[#B1E457]'}))
      setIconColor((prev)=>({...prev,buttonTextColor:'text-[#212936]'}))
    }else{
      setIconColor((prev)=>({...prev,buttonColor:'bg-[#121826]'}))
      setIconColor((prev)=>({...prev,buttonTextColor:'text-[#6C727F]'}))
    }
  },[input])


  return (
    <section id='register'>
      <img src={logo} width={`250px`} className='mb-[25px]' alt="" />
      <div className="register">
        <div className="register_head">
          <h2>Create a Molts Account</h2>
        </div>
        <form action="">
          <div className="userBox">
            {/* =============== Error ============ */}
            {
              error.auth&&
              <div className="errorBox">
                <BiSolidError />
                <h2>Incorrect username or password!</h2>
              </div>
            }
            {/* ============================== userName =================== */}
            <div className="singleUserBox" style={
                {
                  border: `2px solid ${error.username}`,
                }
              }>
              <RiAccountCircleLine className={`${iconColor.nameColor} icon transition-all`} />
              <input onChange={(e)=>{setInput((prev)=>({...prev,username:e.target.value})),setError((prev)=>({...prev,username:'transparent'}))}} type="text" placeholder='Your name' />
            </div>

            {/* ===================== email ================ */}
            <div className="singleUserBox" style={
                {
                  border: `2px solid ${error.email}`,
                }
              }>
              <MdMailOutline className={`${iconColor.emailColor} icon transition-all`} />
              <input onChange={(e)=>{setInput((prev)=>({...prev,email:e.target.value})),setError((prev)=>({...prev,email:'transparent'}))}} type="email" placeholder='Email' />
            </div>

            {/* ==================== password =========== */}
            <div className="singleUserBox" style={
                {
                  border: `2px solid ${error.password}`,
                }
              }>
              <MdLockOutline className={`${iconColor.passColor} icon transition-all`} />
              <input onChange={(e)=>{setInput((prev)=>({...prev,pass:e.target.value})),setError((prev)=>({...prev,password:'transparent'}))}} type={eye?"text":"password"} placeholder='Password' />
              {
                eye?
                  <LuEye onClick={()=>setEye(false)} className='eye' />
                :  
                  <LuEyeClosed onClick={()=>setEye(true)} className='eye' />
              }
            </div>
          </div>
          <button className={`${iconColor.buttonColor} ${iconColor.buttonTextColor}`} onClick={(e)=>handleRegister(e)}>Register</button>
        </form>
      </div>
      <div className="register_text">
        <h4>Already have an account? <Link to={'/auth/login'}>Login</Link></h4>
      </div>



      {/* ============== side img ///// =========== */}
      <img className='sideImg' src={sideImg} alt="" />
    </section>
  )
}

export default Register