import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
           <div className="form-container">
                <h2 className="form-title">Log In</h2>
                <form >
                  
                    <div className="form-control">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name='email' id='' placeholder='Your email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' id='' placeholder='Your password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="LogIn"/>
                </form>
                <p><small>New to Ema-john? <Link to="/signUp">Create A New Account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;