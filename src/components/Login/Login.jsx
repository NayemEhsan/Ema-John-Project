import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
    const {signIn}= useContext(AuthContext);

    const navigate = useNavigate();


    const location =useLocation();
    console.log(location);

    const inform = location.state?.from.pathname || "/";

    const handleLogIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const loggedUser =result .user;
            console.log(loggedUser);
            form.reset();
            navigate(inform, {replace :true})
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
           <div className="form-container">
                <h2 className="form-title">Log In</h2>
                <form onSubmit={handleLogIn}>
                  
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