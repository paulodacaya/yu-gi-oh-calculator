import React from 'react';
import PropTypes from 'prop-types';

const DuelPlayer = props => (

  <div className="player"> 
    <span onDoubleClick={props.handleToggleEditing}>{props.name}</span>
    
    <div className="scores">
      <img src={ require('../../assets/undo.svg') } alt="undo icon" />
      <p>lp</p>
      <h4>{props.lifePoints}</h4>
    </div>

    <div className="lp-btns">
      <button>direct lifepoints</button>
      <button>calculate</button>
    </div>
  </div>
);

DuelPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  lifePoints: PropTypes.number.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default DuelPlayer;