import React from 'react';
import PropTypes from 'prop-types';

import DuelPlayer from './DuelPlayer';
import DuelWinCounter from './DuelWinCounter';
import ResetCard from './ResetCard';

const DuelBoard = props => (
  <main className="duel-board">

    <DuelWinCounter 
      //when player1 loses, it becomes players2 win count, vice versa.
      player1WinCount={props.player2LostCount} 
      player2WinCount={props.player1LostCount} />

    {
      props.duelers
        .map( (duelist, index) => (
          <DuelPlayer 
            key={index}
            name={duelist.name}
            lifePoints={duelist.lifePoints}
            calculate={duelist.calculate}
            isEditing={duelist.isEditing}
            calcIsOpen={duelist.calcIsOpen}
            handleToggleEditing={() => props.toggleEditing(duelist.index) }
            changePlayerName={ text => props.changePlayerName(text, index) }
            onKeyPress={ key => props.onKeyPress(key, index) }
            handleToggleCalcOpen={ () => props.toggleCalcOpen(duelist.index) }
            onCalcBtnClick={ btn => props.onCalcBtnClick(btn, index) }
            onClearDisplayBtn={ () => props.onClearDisplayBtn(index) }
            onCalcDelBtn={ () => props.onCalcDelBtn(index) }
            CalcSubmitHandler={ e => props.CalcSubmitHandler(e, index) }
            handleUndoBtnClick={ () => props.onUndoBtnClick(index) } />
        )
      )
    }

    <img 
      className="vs-image" 
      src={ require('../../assets/versus-img.png') } 
      alt="versus logo" />

    <ResetCard 
      displayResetCard={props.displayResetCard}
      winner={props.winner}
      handleNewGameBtnClick={props.onNewGameBtnClick}
      handleNextRoundBtnClick={props.onNextRoundBtnClick} />
  </main>
);

DuelBoard.propTypes = {
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
  winner: PropTypes.string.isRequired,
  displayResetCard: PropTypes.bool.isRequired,
  onNewGameBtnClick: PropTypes.func.isRequired,
  onNextRoundBtnClick: PropTypes.func.isRequired,
};

export default DuelBoard; 

