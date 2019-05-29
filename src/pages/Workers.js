import React, { Component } from 'react';
import team from '../images/team.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import worker1 from '../images/worker1.png';
import worker2 from '../images/worker2.png';
import worker3 from '../images/worker3.png';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 250);
  }

  render() {
    return null;
  }
}

const Workers = () => {
  return (
    <div className="workers">
      <ScrollToTopOnMount />
      <div className="team">
        <p>Nasz zespół</p>
        <img src={team} alt="" />
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="worker two">
          <img src={worker1} alt="" />
          <div className="description">
            <h1>Katarzyna Nowak</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, asperiores suscipit voluptates nemo recusandae saepe reprehenderit nulla sequi harum qui fuga.</p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="worker">
          <img src={worker2} alt="" />
          <div className="description">
            <h1>Monika Kowalska</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, asperiores suscipit voluptates nemo recusandae saepe reprehenderit nulla sequi harum qui fuga.</p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="worker">
          <img src={worker3} alt="" />
          <div className="description">
            <h1>Natalia Lech</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, asperiores suscipit voluptates nemo recusandae saepe reprehenderit nulla sequi harum qui fuga.</p>
          </div>
        </div>
      </ScrollAnimation>

    </div>

  );
}

export default Workers;