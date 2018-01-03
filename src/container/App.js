import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';

import CardHeader from '../components/CardHeader';
import Header from '../components/Header';
import DuelBoard from '../components/DuelBoard';
import RuleBook from '../components/DuelBoard/RuleBook';
import AppGuide from '../components/DuelBoard/AppGuide';

//CSS
import '../css/index.css';

export default class App extends Component {
  
  
  render() {
    return (
      <Fragment> 
        {/* <CardHeader /> */}

        <div className="duel-container">
          <Header />
          
          {/* <DuelBoard /> */}
          <RuleBook />
          {/* <AppGuide /> */}

        </div>
      </Fragment>
    );
  }
}

