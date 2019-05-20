import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import Intro from './Intro';
// import WithRouter from '../components/routerScroll';
// import withRouter from '../components/routerScroll';


class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        {/* <ScrollToTop> */}
        <div className="animatedLogo">
          {<Intro />}
        </div>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <div className="nav">
            {<Navigation />}
          </div>
          <main>
            {/* <ScrollToTopOnMount /> */}
            {<Page />}
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
        {/* </ScrollToTop> */}
      </Router>
    )
  }
}

export default App;
