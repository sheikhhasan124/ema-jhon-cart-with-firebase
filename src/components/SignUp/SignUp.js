import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import Logo from '../../images/Google.svg'

const SignUp = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const [error, setError]=useState('')

    const handleEmailblur=event=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser=event=>{
        event.preventDefault()

        if(password !== confirmPassword){
              setError('your two password did not match')
              return;
        }
    }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
           <form onSubmit={handleCreateUser}>
                 <div className="input-group">
                     <label htmlFor="email">Email</label>
                     <input onBlur={handleEmailblur} type="email" name="email" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="password">Password</label>
                     <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="confirm-password">Confirm Password</label>
                     <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                 </div>
                 <p>{error}</p>
                 <input className='submit-btn' type="submit" value="Sign Up" />
           </form>
           <p> Already have an account? <Link className='form-link' to="/login">log in</Link></p>
            <div className="form-horizontal">
               <div className='hr'> </div>
               <p>or</p>
               <div className='hr'> </div>
            </div>
             <div>
                 <button className="google-btn"> <img src={Logo} alt="" /> <p>Continue with Google</p></button>
             </div>
        </div>
     </div>
    );
};

export default SignUp;