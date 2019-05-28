import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton';

const Navigation = props => {
  return (
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">Beauty Body</a></div>
      <div className="spacer"></div>
      <div className="toolbar-navigation-items">
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
      </div>
    </nav >
  );
}

export default Navigation;