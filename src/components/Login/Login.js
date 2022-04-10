import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>login</h2>
              <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
              </form>
              <p>New to Ema-Jhon? <Link className='form-link' to="/signup">create an account</Link></p>
           </div>
        </div>
    );
};

export default Login;