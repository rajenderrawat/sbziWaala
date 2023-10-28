import React, { useState } from 'react';
import './Navbar.css';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './Database/logo.png'
 
export const Navbar = () => {

    const[menu,setMenu] = useState("home");

    return (
    <div className='navbar'>  
        <div className="nav-logo">
            <img src={logo} alt="" />
            <Link style={{ textDecoration:'none'}} to="/">
                <p>Sbzi waala</p>
            </Link>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration:'none'}}to ="/">Home/Veggies</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("imported")}}><Link style={{ textDecoration:'none'}} to ="/imported">Imported</Link>{menu==="imported"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("fruits")}}><Link style={{ textDecoration:'none'}} to ="/fruits">Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("dairy")}}><Link style={{ textDecoration:'none'}} to ="/dairy">Dairy</Link>{menu==="dairy"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to ="/login"><button>Login</button></Link>
            <Link to ="/cart"><button><FaCartPlus/></button></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div> 
  )
}
