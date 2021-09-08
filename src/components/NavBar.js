import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navMenu">
          <ul> 
            <NavLink to="/" exact >
            <li>Home</li>  
            </NavLink>

            <NavLink to="/about" exact >
            <li>About</li>
            </NavLink>

            <NavLink to="/artworks"exact>
            <li>Gallery</li>
            </NavLink>

            <NavLink to="/artworks/new" exact >
                <li> Form </li>
            </NavLink>

            <NavLink to="/cart" exact >
                <li> Cart </li>
            </NavLink>
          </ul>            
        </div>
    )
}

export default NavBar

