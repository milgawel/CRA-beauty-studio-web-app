import React, { Component } from "react";
import SlideView from "../components/carousel";
import Animation from "../components/animation";

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const HomePage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="car">{<SlideView />}</div>
      <div className="animation">{<Animation />}</div>
      <div className="Homefooter"></div>
    </>
  );
};

export default HomePage;
