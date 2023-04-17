import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';


const SIgnUp = () => {
    const [error,setError] =useState('');
    const { createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)

        setError('');
        if(password !== confirm){
           setError('Your password did not match')
           return
        }
        else if (password.length < 6){
            setError('password must be 6 character longer')
            return
        }
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch (error=>{
            console.log(error);
            setError(error);
        })
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleSignUp} >
                
                    <div className="form-control">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name='email' id='' placeholder='Your email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' id='' placeholder='Your password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" name='confirm' id='' placeholder='Your password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up"/>
                </form>
                <p><small>Already Have An Account? <Link to="/login">LogIn</Link></small></p>
                <br />
                <p className='error'>{error}</p>
            </div>
        </div>
    );
};

export default SIgnUp;