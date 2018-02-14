import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {

  static propTypes = {
    running: PropTypes.bool.isRequired,
    handleStart: PropTypes.func.isRequired,
    handleStop: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    handlePlusMinus: PropTypes.func.isRequired,
  } 

  render() {
    const renderStartStopButton = this.props.running ?
    <button className="timersettings__controls--startstop" onClick={ () => this.props.handleStop() } >stop</button> :
    <button className="timersettings__controls--startstop" onClick={ () => this.props.handleStart() } >start</button>;

    return (
      <div className="timersettings__controls">
        <div className="timersettings__controls--plusminus">
          <button value="+" onClick={ event => this.props.handlePlusMinus(event.target.value) }>&#43;</button>
          <button value="-" onClick={ event => this.props.handlePlusMinus(event.target.value) }>&minus;</button>
        </div>
        {renderStartStopButton}
        <button className="timersettings__controls--reset" onClick={ () => this.props.handleReset() }>reset</button>
      </div>
    )
  }
}
