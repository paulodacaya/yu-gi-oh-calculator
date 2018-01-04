import React from 'react';

const DuelPlayer = props => (

  <div className="player">
    <span>player 1</span>
    
    <div className="scores">
      <img src={ require('../../assets/undo.svg') } alt="undo icon" />
      <p>lp</p>
      <h4>8000</h4>
    </div>

    <div className="lp-btns">
      <button>direct lifepoints</button>
      <button>calculate</button>
    </div>
  </div>
);

export default DuelPlayer;