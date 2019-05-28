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
};

export default sideDrawer;