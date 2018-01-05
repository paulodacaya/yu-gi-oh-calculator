import React from 'react';

const AppGuide = () => (
  <div className="appguide">
    <h1>Welcome to the Dueling Application</h1>
    <h2>This was designed to give Yu-Gi-Oh duelists a easier 
      way to duel rather using calculators or pen/paper to 
      keep track of battle.
    </h2>
    <ul>
      <li>Dueling: The dueling scoreboard that keeps track of life points,
      player's name and dynamic calculations.</li>
      <li>Official Dueling Rules: Official Konami Yu-Gi-Oh Rulebook Version 10.</li>
    </ul>
    <p>Image of single player rule book</p>
    <ul>
      <li>change player name: double click on player name to input new or changed player name.</li>
      <li>undo recent calculations: click on undo button that will undo the most recent calucation.</li>
      <li>direct lifepoints button: inflict/increase direct lifepoints with single number. Example: Monster deals direct damage, no need for calculation.</li>
      <li>calculate button: inflict/increase lifepoints with a calculation. Example: Caluclate the difference between two monster ATK values. This feauture becomes more useful when monster/card effects, spell/trap cards or chaining all come into play and multiple calculations are needed.</li>
      <li>reset button: reset lifepoints of both players to 8000.</li>
    </ul>

    <h2>future features</h2>
    <ul>
      <li>win count</li>
      <li>lifepoints history to display previous calcuations</li>
    </ul>
  </div>

);

export default AppGuide;


