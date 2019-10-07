import React from 'react';
import { Link } from 'react-router-dom'


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
