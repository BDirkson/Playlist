import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="Nav">
            <NavLink className="nav-link" to="/"> 
            <button className="nav-button"> Home </button>
            </NavLink> 
          <br/>
            <NavLink className="nav-link" to="/about">
              <button className="nav-button"> About </button>
            </NavLink>
       </div>
    );
}
 
export default Navigation;

// nav is okay