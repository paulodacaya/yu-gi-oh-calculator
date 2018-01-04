import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

//component imports
import Card from '../components/Card';
import Duel from '../components/Duel';
import NotFound from '../components/NotFound';

//CSS
import '../css/index.css';

export default class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter>
        <Fragment> 

            <Switch>
              <Route exact path="/" render={ () => (
                <Card />
              )} />
              <Route path="/duel" render={ () => (
                <Duel />
              )} />
               
              {/* 404 ROUTE */}
              <Route component={NotFound} />
            </Switch>

        </Fragment>
      </BrowserRouter>
    );
  }
}

