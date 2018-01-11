import React from 'react';
import PropTypes from 'prop-types';

import DuelPlayerName from './DuelPlayerName';
import DuelCalculator from './DuelCalculator';

const DuelPlayer = props => (

  <div className="player"> 
    <DuelPlayerName
      isEditing={props.isEditing}
      handleToggleEditing={props.handleToggleEditing}
      handleNameEdits={ e => 
        props.changePlayerName(e.target.value)
      }
      handleKeyPress={ e => 
        props.onKeyPress(e.key)
      } >
      
      {props.name}
    </DuelPlayerName>
    
    <div className="scores">
      <img src={ require('../../assets/undo.svg') } alt="undo icon" onClick={props.handleUndoBtnClick}/>
      <p>lp</p>
      <h4>{props.lifePoints}</h4>
    </div>

    <DuelCalculator
      calculate={props.calculate}
      calcIsOpen={props.calcIsOpen}
      handleToggleCalcOpen={props.handleToggleCalcOpen}
      handleCalcBtnClick={ e => {
        props.onCalcBtnClick(e.target.value);
      }}
      handleClearDisplayBtn={props.onClearDisplayBtn}
      handleCalcDelBtn={props.onCalcDelBtn}
      CalcSubmitHandler={ e => {
        props.CalcSubmitHandler(e);
      }} />
  </div>
);

DuelPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  lifePoints: PropTypes.number.isRequired,
  calculate: PropTypes.string.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  changePlayerName: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  handleToggleCalcOpen: PropTypes.func.isRequired,
  onCalcBtnClick: PropTypes.func.isRequired,
  onClearDisplayBtn: PropTypes.func.isRequired,
  onCalcDelBtn: PropTypes.func.isRequired,
  CalcSubmitHandler: PropTypes.func.isRequired,
  handleUndoBtnClick: PropTypes.func.isRequired,
};

export default DuelPlayer;