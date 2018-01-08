import React from 'react';
import PropTypes from 'prop-types';

import DuelPlayerName from './DuelPlayerName';
import DuelCalculator from './DuelCalculator';

const DuelPlayer = props => (

  <div className="player"> 
    <DuelPlayerName
      isEditing={props.isEditing}
      handleToggleEditing={props.handleToggleEditing}
      handleNameEdits={ event => 
        props.changePlayerName(event.target.value)
      }
      handleKeyPress={ event => 
        props.onKeyPress(event.key)
      } >
      
      {props.name}
    </DuelPlayerName>
    
    <div className="scores">
      <img src={ require('../../assets/undo.svg') } alt="undo icon" />
      <p>lp</p>
      <h4>{props.lifePoints}</h4>
    </div>

    <DuelCalculator 
       />
  </div>
);

DuelPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  lifePoints: PropTypes.number.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  changePlayerName: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default DuelPlayer;