import React, { Component } from 'react';

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
        Offedsffdsdsdsfr
      </div>
    </div>
  );
}

export default Offer;