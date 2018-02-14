import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import DuelPlayer from './DuelPlayer';
import Banner from './Banner';
import Features from '../Features'
import ResetCard from './ResetCard';


export default class DuelBoard extends Component {
 
  static propTypes = {
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

  state = {
    totalSeconds: 2400, // 2400seconds = 40 minutes
    running: false,
    isClockSettingsOpen: false, 
  }

  toggleClockSettings = () => {
    const { isClockSettingsOpen } = this.state;
    this.setState({ isClockSettingsOpen: !isClockSettingsOpen });
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
    return (
      <main className="duelboard">
        <Banner 
          //when player1 loses, it becomes players2 win count, vice versa.
          player1WinCount={this.props.player2LostCount} 
          player2WinCount={this.props.player1LostCount}
          totalSeconds={this.state.totalSeconds}
          toggleClockSettings={this.toggleClockSettings}/>
        
        <div className="duelists">
          {this.props.duelers.map( (duelist, index) => (
            <DuelPlayer 
              key={index}
              name={duelist.name}
              lifePoints={duelist.lifePoints}
              calculate={duelist.calculate}
              isEditing={duelist.isEditing}
              calcIsOpen={duelist.calcIsOpen}
              handleToggleEditing={() => this.props.toggleEditing(duelist.index) }
              changePlayerName={ text => this.props.changePlayerName(text, index) }
              onKeyPress={ key => this.props.onKeyPress(key, index) }
              handleToggleCalcOpen={ () => this.props.toggleCalcOpen(duelist.index) }
              onCalcBtnClick={ btn => this.props.onCalcBtnClick(btn, index) }
              onClearDisplayBtn={ () => this.props.onClearDisplayBtn(index) }
              onCalcDelBtn={ () => this.props.onCalcDelBtn(index) }
              CalcSubmitHandler={ e => this.props.CalcSubmitHandler(e, index) }
              onUndoBtnClick={ () => this.props.onUndoBtnClick(index) } />
            )
          )}
        </div>
        
        <Features
          totalSeconds={this.state.totalSeconds}
          running={this.state.running}
          onStart={this.onStart}
          onStop={this.onStop}
          onReset={this.onReset}
          onPlusMinus={this.onPlusMinus}
          logs={this.props.logs}
          onLogUpdate={this.props.onLogUpdate}
          isClockSettingsOpen={this.state.isClockSettingsOpen}
          toggleClockSettings={this.toggleClockSettings}/>
        
        <ResetCard 
          displayResetCard={this.props.displayResetCard}
          winner={this.props.winner}
          handleNewGameBtnClick={this.props.onNewGameBtnClick}
          handleNextRoundBtnClick={this.props.onNextRoundBtnClick}/>
      </main>
    );
  }
}

