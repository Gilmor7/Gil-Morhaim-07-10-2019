import React from 'react';
import { Link } from 'react-router-dom'


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <div>
            Hello World
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Fav</Link>
        </div>
    )
}

export default NavBar;
