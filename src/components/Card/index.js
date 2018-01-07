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
      duelist1={props.duelist1}
      duelist2={props.duelist2}
      handlePlayerInput={props.handlePlayerInput}
      playersSubmitHandler={props.playersSubmitHandler}
      fireRedirect={props.fireRedirect} />
  </div>
);

Card.proptypes = {
  duelist1: PropTypes.string.isRequired,
  duelist2: PropTypes.string.isRequired,
  handlePlayerInput: PropTypes.func.isRequired,
  playersSubmitHandler: PropTypes.func.isRequired,
  fireRedirect: PropTypes.bool.isRequired,
};

export default Card;