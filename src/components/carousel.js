import React, { Component } from "react";
import Slider from "react-slick";


export default class SlideView extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 5000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
    };
    
    return (
      <div className="caro">
        <h2>Dlaczego my?</h2>
        <Slider {...settings}>
          <div className="img1">
          </div>
          <div className="img2">
          </div>
          <div className="img3">
          </div>
          <div className="img4">
          </div>
          <div className="img5">
          </div>
        </Slider>
      </div>
    );
  }
}