import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = ({user,logOUt}) => {

    const handleLogOut =()=>{
        logOUt()
        .then(result =>{})
        .catch(error =>console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
                {
                    user && <span className='user'>{user.email} <button onClick={handleLogOut}>SignOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;