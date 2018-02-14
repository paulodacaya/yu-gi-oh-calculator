import React from 'react';
import PropTypes from 'prop-types';

import DuelPlayerName from './DuelPlayerName';
import DuelCalculator from './DuelCalculator';

const DuelPlayer = props => {

  const getPercentageOfLifepoints = lifePoints => {
    return ( lifePoints/8000 ) * 100;
  }
  
  return (
    <div className="duelist"> 
      <DuelPlayerName
        isEditing={props.isEditing}
        handleToggleEditing={props.handleToggleEditing}
        handleNameEdits={ e => props.changePlayerName(e.target.value) }
        handleKeyPress={ e => props.onKeyPress(e.key) } >
        
        {props.name}
      </DuelPlayerName>

      <div className="duelist__bar">
        <div 
          className="duelist__bar--lifepoints" 
          style={{ width: `${getPercentageOfLifepoints(props.lifePoints)}%` }}>
        </div>
      </div>
      
      <div className="duelist__lifepoints parallelogram-blue">
        <div className="duelist__lifepoints--wrapper">
          <h2>lp</h2>
          <h3>{props.lifePoints}</h3>
        </div>
      </div>

      <DuelCalculator
        calculate={props.calculate}
        calcIsOpen={props.calcIsOpen}
        handleToggleCalcOpen={props.handleToggleCalcOpen}
        handleCalcBtnClick={ e => props.onCalcBtnClick(e.target.value) }
        handleClearDisplayBtn={props.onClearDisplayBtn}
        handleCalcDelBtn={props.onCalcDelBtn}
        CalcSubmitHandler={ e => props.CalcSubmitHandler(e) }
        handleUndoBtnClick={props.onUndoBtnClick}/>
    </div>
  );
}

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
  onUndoBtnClick: PropTypes.func.isRequired,
};

export default DuelPlayer;