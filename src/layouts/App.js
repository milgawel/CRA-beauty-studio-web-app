import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import Intro from './Intro';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div className="animatedLogo">
          {<Intro />}
        </div>
        <div className="app">
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <header>
            {<Header />}
          </header>
          <div className="nav">
            {<Navigation drawerClickHandler={this.drawerToggleClickHandler} />}
          </div>
          <main>
            {<Page />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
