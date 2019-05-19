import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import cert from '../images/cert.jpg';

const AboutUs = () => {
  return (
    <div className="aboutUsGeneral">

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        {
          <div className="aUs1">
          </div>
        }
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="aUs2">
          <h1> Kilka słów o naszym<strong> Beauty Studio</strong></h1>
          <p className="2">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit fugit corporis recusandae officiis ad praesentium? Impedit exercitationem, neque repellat rerum nostrum tempora doloremque commodi molestiae cumque eius, numquam animi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel labore dolore totam exercitationem nisi, distinctio reiciendis beatae ex a nulla corrupti sint eaque optio harum quisquam illo officiis? Quaerat, maxime.</p>
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