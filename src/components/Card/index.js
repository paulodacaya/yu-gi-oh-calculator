import React from 'react';
import PropTypes from 'prop-types';

import PlayersInputForm from './PlayersInputForm';

const Card = props => (

  <div className="container">
    <div className="card-header">
      <img src={ require('../../assets/yugioh-logo.png') } alt="classic yu-gi-oh logo"/>
      <h2>dueling application</h2>
      <p>please enter the names of the two duelist!</p>
    </div>

    <PlayersInputForm 
      player1={props.pendingPlayer1}
      player2={props.pendingPlayer2}
      handlePlayerInput={props.handlePlayerInput}
      playersSubmitHandler={props.playersSubmitHandler}
      fireRedirect={props.fireRedirect} />
  </div>
);

Card.proptypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  handlePlayerInput: PropTypes.func.isRequired,
  playersSubmitHandler: PropTypes.func.isRequired,
  fireRedirect: PropTypes.bool.isRequired,
};

export default Card;