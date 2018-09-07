import React from 'react';
import { Link } from 'react-router-dom';

class Hero extends React.Component {

  render() {
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
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <Link to='/'>All NEOs</Link>
                </li>
                <li>
                  <Link to='/favorites'>My favorited NEOs</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
export default Hero;
