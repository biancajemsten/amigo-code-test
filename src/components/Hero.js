import React from 'react';

const Hero = () => {
  return(
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="title-container">
            <h1 className="title">
              NASA
            </h1>
            <h2 className="subtitle">
              Near Earth Objects
            </h2>
          </div>
          <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
