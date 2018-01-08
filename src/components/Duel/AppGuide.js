import React from 'react';

const AppGuide = () => (
  <div className="appguide">
    <div>
      <h1>Welcome to the Dueling Application</h1>
      <h2>Designed to give Yu-Gi-Oh duelists a easier 
        way to duel rather using calculators or pen/paper to 
        keep track of battle.
      </h2>

      <ul>
        <li><span>Dueling:</span> The dueling scoreboard that keeps track of life points,
        player's name and dynamic calculations.</li>
        <li><span>Official Dueling Rules:</span> Official Konami Yu-Gi-Oh Rulebook Version 10.</li>
      </ul>
    </div>

    <div>
      <img 
        src={ require('../../assets/duelist.png') } 
        alt="player component in 'Dueling' tab." />

      <ul>
        <li><span>change player name:</span> Double click on player name to change players name, hit 'enter' on keyboard or click 'OK'.</li>
        <li><span>undo recent calculations:</span> Click on undo button that will undo the most recent calculation.</li>
        <li><span>direct lifepoints button:</span> Inflict/increase direct lifepoints with single number. Example: Monster deals direct damage, no need for calculation.</li>
        <li><span>calculate button:</span> Inflict/increase lifepoints with a calculation. Example: Calculate the difference between two monster ATK values. This feauture becomes more useful when monster/card effects, spell/trap cards or chaining all come into play and multiple calculations are needed.</li>
        <li><span>reset button:</span> Reset lifepoints of both players to 8000.</li>
      </ul>
    </div>
  </div>

);

export default AppGuide;


