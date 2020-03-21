import React, { Component } from "react";
import Slider from "react-slick";

export default class SlideView extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1200,
      autoplaySpeed: 3500,
      slidesToShow: 2.25,
      slidesToScroll: 1.25,
      autoplay: true,
      swipeToSlide: true
    };

    return (
      <div className="caro">
        <h2>Dlaczego my?</h2>
        <Slider {...settings}>
          <div className="img1 mySlideshow"></div>
          <div className="img2 mySlideshow"></div>
          <div className="img3 mySlideshow"></div>
          <div className="img4 mySlideshow"></div>
          <div className="img5 mySlideshow"></div>
        </Slider>
      </div>
    );
  }
}
