import React, { Component } from 'react';
import Manicure from '../components/dropdowns/Manicure'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const Offer = () => {
  return (
    <div className="offer">
      <ScrollToTopOnMount />
      <div>
        {Manicure}
      </div>
    </div>
  );
}

export default Offer;