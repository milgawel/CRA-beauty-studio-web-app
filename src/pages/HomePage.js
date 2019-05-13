import React from 'react';
import SlideView from '../components/carousel';
import Animation from '../components/animation';

const HomePage = () => {
  return (
    <>
      <div className="car">
        {<SlideView />}
      </div>
      <div className="animation">
        {<Animation />}
      </div>
      <div className="Homefooter">
      </div>
    </>
  );
}

export default HomePage;