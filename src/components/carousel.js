import React, { Component } from "react";
import Slider from "react-slick";


export default class SlideView extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      autoplaySpeed: 2500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      swipeToSlide: true,
    };
    
    return (
      <div className="caro">
        <h2>Dlaczego my?</h2>
        <Slider {...settings}>
          <div className="img1 mySlideshow">
          </div>
          <div className="img2 mySlideshow">
          </div>
          <div className="img3 mySlideshow">
          </div>
          <div className="img4 mySlideshow">
          </div>
          <div className="img5 mySlideshow">
          </div>
        </Slider>
      </div>
    );
  }
}