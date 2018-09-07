import React from 'react';
import { Link } from 'react-router-dom';

class Hero extends React.Component {

  constructor(){
    super();
    this.state = {
      index: false,
      favorites: false
    };
  }

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
                <li>
                  <Link to='/'>NEO List</Link>
                </li>
                <li>
                  <Link to='/favorites'>My favorite NEOs</Link>
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
