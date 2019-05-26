import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Art1 from '../components/arts/art1';
import Art2 from '../components/arts/art2';
import Art3 from '../components/arts/art3';
import Art4 from '../components/arts/art4';


const Animation = () => {
  return (
    <>
      <div className="whyUs">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          {<Art1 />}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          {<Art2 />}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          {<Art3 />}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          {<Art4 />}
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Animation;