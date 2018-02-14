import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//import components
import Header from '../Header';
import DuelBoard from './DuelBoard';
import RuleBook from './RuleBook';
import AppGuide from './AppGuide';
import NotFound from '../NotFound';

const Duel = props => (
  
  <div className="container">
    <Header />
    
    <Switch>
      <Route exact path="/duel" render={ () => <Redirect to="/duel/duelboard" /> } />

      <Route path="/duel/duelboard" render={ () => (
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
          onUndoBtnClick={props.onUndoBtnClick}
          player1LostCount={props.player1LostCount}
          player2LostCount={props.player2LostCount}
          winner={props.winner}
          displayResetCard={props.displayResetCard}
          onNewGameBtnClick={props.onNewGameBtnClick}
          onNextRoundBtnClick={props.onNextRoundBtnClick}
          logs={props.logs}
          onLogUpdate={props.onLogUpdate}/>
      )}/>
      
      <Route path="/duel/rules" component={RuleBook} />
      <Route path="/duel/app-guide" component={AppGuide} />
      <Route component={NotFound} />
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
  player1LostCount: PropTypes.number.isRequired,
  player2LostCount: PropTypes.number.isRequired,
  winner: PropTypes.string,
  displayResetCard: PropTypes.bool.isRequired,
  onNewGameBtnClick: PropTypes.func.isRequired,
  onNextRoundBtnClick: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired,
  onLogUpdate: PropTypes.func.isRequired,
};

export default Duel;