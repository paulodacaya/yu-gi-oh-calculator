import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//import components
import Header from '../Header';
import DuelBoard from './DuelBoard';
import RuleBook from './RuleBook';
import AppGuide from './AppGuide';

const Duel = () => (
  
  <div className="duel-container">
    <Header />

    <Route exact path="/duel" render={ () => (
      <Redirect to="/duel/duelboard" />
    )} />

    <Route path="/duel/duelboard" render={ () => (
      <DuelBoard />
    )} />
    
    <Route path="/duel/rules" render={ () => (
      <RuleBook />
    )} />
    
    <Route path="/duel/app-guide" render={ () => (
      <AppGuide />
    )} />
  </div>
);

export default Duel;