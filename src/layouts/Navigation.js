import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/styles.min.css';
// import '../js/script.js';

const Navigation = () => {
 
  return ( 
    <nav id="nav">
      <ul>
        <li>
          <NavLink to="/" exact>Strona główna</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" >O nas</NavLink>
        </li>
        <li>
          <NavLink to="/workers" >Nasi specjaliści</NavLink>
        </li>
        <li>
          <NavLink to="/offer" >Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/contact" >kontakt</NavLink>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navigation;