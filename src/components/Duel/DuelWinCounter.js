import React from 'react';
import PropTypes from 'prop-types';

const DuelWinCounter = props => (
  <div id="winCounter">
    <span>{props.player1WinCount}</span>
    <span>{props.player2WinCount}</span>
  </div>
)

DuelWinCounter.propTypes = {
  player1WinCount: PropTypes.number.isRequired,
  player2WinCount: PropTypes.number.isRequired,
}

export default DuelWinCounter;