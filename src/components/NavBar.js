import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
          <ul> 
            <NavLink to="/" exact >
            <li>Home</li>  
            </NavLink>
        
            <NavLink to="/artworks"exact >
            <li>ARTS? </li>
            </NavLink>

            <NavLink to="/about" exact >
            <li>About</li>
            </NavLink>

            <NavLink to="/artworkslist"exact>
            <li>List</li>
            </NavLink>

            <NavLink to="/artworksform" exact >
                <li> Form </li>
            </NavLink>
          </ul>
            
        </div>
    )
}

export default NavBar

