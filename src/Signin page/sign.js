import React from 'react';
import './sign.css';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const sign = () => {
  return(
    <div className='wrappersign'>
      <form action="">
        <h1>Register</h1>
        <div className='input-boxsign'>
          <input type="email" placeholder='email' required/>
          <FaUser className='iconmax'/>

          
        </div>
        <div className='input-boxsign'>
          <input type="password" placeholder='password' required/>
          <FaLock className='iconmax'/>
        </div>
        <div className='input-boxsign'>
          <input type="password" placeholder='confirm password' required/>
          <FaLock className='iconmax'/>
        </div>
        
        <Link to="/"><button type="submit">Register</button></Link>
        <br></br>
        <br></br>
        <div className='"register-linksign'>
          <centre><p className='alr'>Already have an account? <a href="Login">Signin</a></p></centre>
        </div>
      </form>
    </div>
  )
};
export default sign;