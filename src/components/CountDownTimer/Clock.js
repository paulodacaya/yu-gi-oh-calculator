import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

//component
import Dice from './Dice';
import Coin from './Coin';

export default class Clock extends Component {

  static propTypes = {
    totalSeconds: PropTypes.number.isRequired,
  }

  formatSeconds = totalSeconds => {
    let seconds = totalSeconds%60;
    let minutes = Math.floor(totalSeconds/60);
    
    if(seconds < 10) {
      seconds = `0${seconds}`;
    }
    
    if(minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }


  render() {
    const { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span>
          {this.formatSeconds(totalSeconds)} 
        </span>
        <Coin />
        <Dice />
      </div>
    )
  }
}