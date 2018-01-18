import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//import components
import Header from '../Header';
import DuelBoard from './DuelBoard';
import RuleBook from './RuleBook';
import AppGuide from './AppGuide';
import NotFound from '../NotFound';

const Duel = props => (
  
  <div className="duel-container">
    <ReactCSSTransitionGroup
      transitionName="header"
      transitionEnter={false}
      transitionLeave={false}
      transitionAppear={true}
      transitionAppearTimeout={500} >
      <Header
        toggleHeaderExistance={props.toggleHeaderExistance} />
    </ReactCSSTransitionGroup>

    <Switch>
      <Route exact path="/duel" render={ () => <Redirect to="/duel/duelboard" /> } />

      <Route path="/duel/duelboard" render={ () => (
        <ReactCSSTransitionGroup
          transitionName="duelboard"
          transitionEnter={false}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={500} >
          <DuelBoard 
            duelers={props.duelers}
            toggleEditing={props.toggleEditing}
            changePlayerName={props.changePlayerName}
            onKeyPress={props.onKeyPress}
            calcIsOpen={props.calcIsOpen}
            toggleCalcOpen={props.toggleCalcOpen}
            onCalcBtnClick={props.onCalcBtnClick}
            onClearDisplayBtn={props.onClearDisplayBtn}
            onCalcDelBtn={props.onCalcDelBtn}
            CalcSubmitHandler={props.CalcSubmitHandler}
            onUndoBtnClick={props.onUndoBtnClick} />
          </ReactCSSTransitionGroup>
      )} />
      
      <Route path="/duel/rules" component={RuleBook} />
      <Route path="/duel/app-guide" component={AppGuide} />
      <Route render={ () => 
        <NotFound headerExists={props.headerExists} /> 
      } />
    </Switch>
  </div>
);

Duel.propTypes = {
  duelers: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  changePlayerName: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  toggleCalcOpen: PropTypes.func.isRequired,
  onCalcBtnClick: PropTypes.func.isRequired,
  onClearDisplayBtn: PropTypes.func.isRequired,
  onCalcDelBtn: PropTypes.func.isRequired,
  CalcSubmitHandler: PropTypes.func.isRequired,
  onUndoBtnClick: PropTypes.func.isRequired,
  headerExists: PropTypes.bool.isRequired,
  toggleHeaderExistance: PropTypes.func.isRequired,
};

export default Duel;