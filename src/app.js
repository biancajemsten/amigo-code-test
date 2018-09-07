import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NeoIndex from './components/Index';
import NeoShow from './components/Show';
import Favorites from './components/Favorites';
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
              <Switch>
                <Route exact path='/' component={NeoIndex}/>
                <Route exact path='/favorites' component={Favorites}/>
                <Route exact path='/:id' component={NeoShow}/>
              </Switch>
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
