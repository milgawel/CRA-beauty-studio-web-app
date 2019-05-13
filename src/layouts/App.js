import React, { Component } from 'react';
import '../css/styles.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import Intro from './Intro';



class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
