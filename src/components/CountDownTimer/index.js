import React, { Component } from 'react';

//import components
import Clock from './Clock';
import Controls from './Controls';

export default class CountDownTimer extends Component {

  state = {
    totalSeconds: 2400, // 2400seconds = 40 minutes
    running: false,
  }

  onStart = () => {
    this.setState({ running: true });
    this.startTimer();
  }

  onStop = () => {
    this.setState({ running: false });
    clearInterval(this.timer);
    this.timer = undefined; 
  }

  onReset = () => {
    this.setState({ totalSeconds: 2400 })
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const { totalSeconds } = this.state;
      const newTotalSeconds = totalSeconds - 1;
      this.setState({
        totalSeconds: newTotalSeconds >= 0 ? newTotalSeconds : 0,
      })
    }, 1000);
  }
  
  componentWillUnmount() {
    const { running } = this.state;
    
    if(running) {
      clearInterval(this.timer);
      this.timer = undefined; 
    }
  }

  onPlusMinus = value => {
    const { totalSeconds } = this.state;
    if(value === "+") {
      this.setState({ totalSeconds: totalSeconds + 60 })
    } else if(value === "-") {
      this.setState({ totalSeconds: totalSeconds - 60 })
    }
  }
  
  render() {
    const { totalSeconds, running } = this.state;
    

    return (
      <div className="countdowntimer">
        <Clock totalSeconds={totalSeconds} />
        <Controls 
          running={running}
          handleStart={this.onStart}
          handleStop={this.onStop}
          handleReset={this.onReset}
          handlePlusMinus={this.onPlusMinus} />
      </div>
    )
  }
}