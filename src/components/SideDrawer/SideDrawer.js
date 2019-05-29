import React from 'react';
import { NavLink } from 'react-router-dom';

const sideDrawer = props => {
  
let drawerClasses = ['side-drawer'];

if (props.show ) {
  drawerClasses = 'side-drawer open';
}

  return(
  <nav className={drawerClasses}>
    <ul>
      <li>
        <NavLink to="/" exact onClick={props.click}>Strona główna</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" onClick={props.click}>O nas</NavLink>
      </li>
      <li>
        <NavLink to="/workers" onClick={props.click}>Nasi specjaliści</NavLink>
      </li>
      <li>
        <NavLink to="/offer" onClick={props.click}>Oferta</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={props.click}>kontakt</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default sideDrawer;