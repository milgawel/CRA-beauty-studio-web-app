import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import cert from '../images/cert.jpg';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}


const AboutUs = () => {
  return (
    <div className="aboutUsGeneral">
      <ScrollToTopOnMount />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        {<div className="aUs1"></div>}
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="aUs2">
          <h1> Kilka słów o naszym<strong> Beauty Studio</strong></h1>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit fugit corporis recusandae officiis ad praesentium? Impedit exercitationem, neque repellat rerum nostrum tempora doloremque commodi molestiae cumque eius, numquam animi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </ScrollAnimation>

      <div className="aUs3">
        <h1>Umów się już dziś!</h1>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="aUs4">
          <h1>Nasze certyfikaty</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti explicabo possimus nisi repudiandae natus excepturi vero accusamus, dolores quasi, iusto perferendis! Architecto aperiam perferendis reprehenderit quasi quisquam consequuntur commodi.</p>
          <div className="certificates">
            <figure className="imghvr-fade">
              <img src={cert} alt="banner" />
              <figcaption>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
              </figcaption>
            </figure>
            <figure className="imghvr-flip-vert">
              <img src={cert} alt="banner" />
              <figcaption>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
              </figcaption>
            </figure>
            <figure className="imghvr-shutter-out-horiz">
              <img src={cert} alt="banner" />
              <figcaption>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
              </figcaption>
            </figure>
            <figure className="imghvr-hinge-right">
              <img src={cert} alt="banner" />
              <figcaption>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutUs;