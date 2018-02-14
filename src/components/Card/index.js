import React from 'react';
import PropTypes from 'prop-types';

import PlayersInputForm from './PlayersInputForm';

const Card = props => (
  <div className="wrapper">
    <div className="intro parallelogram">
      <div className="intro__title">
        <h1>yu-gi-oh</h1>
        <h1 className="intro__title--sub">calculator</h1>
      </div>

      <h2>for all your dueling needs</h2>
      <p>Please enter the names of the two duelist</p>

      <PlayersInputForm 
        duelist1={props.duelist1}
        duelist2={props.duelist2}
        handlePlayerInput={props.handlePlayerInput}
        playersSubmitHandler={props.playersSubmitHandler}
        fireRedirect={props.fireRedirect} />
    </div>
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