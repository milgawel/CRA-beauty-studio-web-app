import React, { Component } from 'react';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const cosmetology = [
  { id: 1, name: "zabieg 1", price: "99zł" },
  { id: 2, name: "zabieg 2", price: "99zł" },
  { id: 3, name: "zabieg 3", price: "99zł" },
  { id: 4, name: "zabieg 4", price: "99zł" },
  { id: 5, name: "zabieg 5", price: "99zł" },
  { id: 6, name: "zabieg 6", price: "99zł" },
  { id: 7, name: "zabieg 7", price: "99zł" },
  { id: 8, name: "zabieg 8", price: "99zł" },
  { id: 9, name: "zabieg 9", price: "99zł" },
]

const cosmetologyOffers = cosmetology.map(item => (
  <li key={item.id}>
    <div className="name">
      <p className="itemName">{item.name}</p>
    </div>
    <div className="price">
      <p className="itemPrice">{item.price}</p>
    </div>
  </li >
))

const Offer = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="offer">
        <div className="mainOffer">
          <h1>Nasza oferta</h1>
        </div>
        <div className="offers">
          <div className="offer1">
            <ul>
              <p className="title">kosmetologia paznokci</p>
              {cosmetologyOffers}
            </ul>
          </div>
          <div className="offer1">
            <ul>
              <p className="title">kosmetologia Twarzy</p>
              {cosmetologyOffers}
            </ul>
          </div>
          <div className="offer1">
            <ul>
              <p className="title">kosmetologia stóp</p>
              {cosmetologyOffers}
            </ul>
          </div>
          <div className="offer1">
            <ul>
              <p className="title">inne zabiegi ciała</p>
              {cosmetologyOffers}
            </ul>
          </div>

        </div>



      </div>
    </>
  );
}

export default Offer;