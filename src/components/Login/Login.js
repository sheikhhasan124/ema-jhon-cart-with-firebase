import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import Logo from '../../images/Google.svg'

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>login</h2>
              <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id=""required/>
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
              </form>
              <p>New to Ema-Jhon? <Link className='form-link' to="/signup">create an account</Link></p>
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

export default Login;