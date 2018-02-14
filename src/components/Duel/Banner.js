import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Features/TimerSettings/Clock';

const Banner = props => (
  <div className="banner">
    <span className="banner__wincount">{props.player1WinCount}</span>
    <span className="banner__clock" onClick={ () => props.toggleClockSettings() }>
      <Clock totalSeconds={props.totalSeconds}/>
    </span>
    <span className="banner__wincount">{props.player2WinCount}</span>
  </div>
)

Banner.propTypes = {
  player1WinCount: PropTypes.number.isRequired,
  player2WinCount: PropTypes.number.isRequired,
  totalSeconds: PropTypes.number.isRequired,
  toggleClockSettings: PropTypes.func.isRequired,
}

export default Banner;