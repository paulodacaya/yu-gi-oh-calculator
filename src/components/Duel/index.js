import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//import components
import Header from '../Header';
import DuelBoard from './DuelBoard';
import RuleBook from './RuleBook';
import AppGuide from './AppGuide';

const Duel = props => (
  
  <div className="duel-container">
    <Header />

    <Route exact path="/duel" render={ () => (
      <Redirect to="/duel/duelboard" />
    )} />

    <Route path="/duel/duelboard" render={ () => (
      <DuelBoard 
        duelers={props.duelers}
        toggleEditing={props.toggleEditing} />
    )} />
    
    <Route path="/duel/rules" render={ () => (
      <RuleBook />
    )} />
    
    <Route path="/duel/app-guide" render={ () => (
      <AppGuide />
    )} />
  </div>
);

Duel.propTypes = {
  duelers: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};

export default Duel;