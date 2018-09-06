import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NEOIndex from './components/Index';
import Hero from './components/Hero';

import 'bulma';
import './scss/style.scss';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <main>
          <Hero/>
          <section className="section">
            <div className="container">
              <Route exact path='/' component={NEOIndex}/>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }



}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
