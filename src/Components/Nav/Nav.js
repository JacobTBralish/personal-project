import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav (){
    return (
    <div className='NavBack'>
        <ul className='Navbar'>
            <button className='NavLink'><li><Link to='/' className='navButton' >Home</Link></li></button>
            <button className='NavLink'><li><Link to='/findstate' className='navButton' >Find Campgrounds</Link></li></button>
            <button className='NavLink'><li><Link to='/login' className='navButton' >Login</Link></li></button>
            <button className='NavLink'><li><Link to='/register' className='navButton' >Register</Link></li></button>
            <button className='NavLink'><li><Link to='/searchbymap' className='navButton' >Search the map</Link></li></button>
            <button className='NavLink'><li><Link to='/profile' className='navButton' >Profile</Link></li></button>
        </ul>
    </div>
    )
}

export default Nav;