import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

//components
import TimerSettings from '../Features/TimerSettings';
import Dice from './Dice';
import Coin from './Coin';
import Log from './Log';


export default class Features extends Component {

  static propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlusMinus: PropTypes.func.isRequired,
    onLogUpdate: PropTypes.func.isRequired,
    logs: PropTypes.array.isRequired,
    isClockSettingsOpen: PropTypes.bool.isRequired,
    toggleClockSettings: PropTypes.func.isRequired,
  }

  state = {
    showFeatures: false,
    isLogOpen: false,
  }

  toggleProperty = property => {
    const prop = this.state[property];
    this.setState({ [property]: !prop });
  }

  toggleFeature = () => this.toggleProperty("showFeatures");
  toggleLogOpen = () => this.toggleProperty("isLogOpen");

  render() {
    const { showFeatures } = this.state;
    const renderFeatures = showFeatures
    ? <div>
        <span className="features__arrow up" onClick={ () => this.toggleFeature() }>▼</span>
        <div className="features__box">
          <Coin handleLogUpdate={this.props.onLogUpdate} />
          <Dice />
          <img src={require( "../../assets/timer.svg" )}  alt="timer svg design" onClick={ () => this.props.toggleClockSettings() } />
          <img src={require( "../../assets/book.svg" )} alt="book svg design" onClick={ () => this.toggleLogOpen() } />
        </div>
      </div>
    : <span className="features__arrow" onClick={ () => this.toggleFeature() }>▼</span>


    return (
      <Fragment>
        <div className="features">
          {renderFeatures}
        </div>

        <TimerSettings 
          totalSeconds={this.props.totalSeconds}
          running={this.props.running}
          onStart={this.props.onStart}
          onStop={this.props.onStop}
          onReset={this.props.onReset}
          onPlusMinus={this.props.onPlusMinus}
          onLogUpdate={this.props.onLogUpdate}
          isClockSettingsOpen={this.props.isClockSettingsOpen}
          toggleClockSettings={this.props.toggleClockSettings}/>
        
        <Log 
          logs={this.props.logs}
          isLogOpen={this.state.isLogOpen}
          toggleLogOpen={this.toggleLogOpen}/>
      </Fragment>
    );
  }
}
