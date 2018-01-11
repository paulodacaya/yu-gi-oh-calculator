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
    
      <ul>
        <li><span>undo recent calculations:</span> Click on undo button that will undo the most recent calculation, cannot undo further calculations.</li>
        <li><span>Reset lifePoints:</span> Refreshing the page will reset to default. </li>
        <li><span>change player name:</span> Double click on player name to change players name, hit 'enter' on keyboard or click 'OK'.</li>
      </ul>
      <img 
        className="gif-1"
        src={ require('../../assets/edit-name.gif') } 
        alt="gif displaying how to edit palyers name." />
      
    </div>
    <div>
      <ul>
        <li><span>'CALCULATE' button:</span> When clicked, a calculator will pop up where you can make calcualtions towards your life points. <br /><br />
        For single digit calculations, initialize the calculation with a minus(-) or plus(+), followed by the number you wish to calculate. <br /><br />
        Example: -500 or +800</li>
        <img 
        className="gif-2"
        src={ require('../../assets/calculate-btn.gif') } 
        alt="gif displaying basic operation of calculation." />
        <li>Though simple calculations are great, you can expand on this by writing equations where this benifits most. <br /><br />
        At times, spells/trap/field cards and chaining can be cumbersome to deal with. This is where equation come into play. <br /><br />
        When writing equation please initialize with minus or plus followed by parenthesis, (). Equation must follow these conditions to apply successfully. <br /><br />
        Example: <br />
        -(2400-1750), the difference between two monsters.<br />
        -(2*2100+250-3000), calculate monster gains spell/field card effects.</li>
        <img 
        className="gif-2"
        src={ require('../../assets/calculate-btn2.gif') } 
        alt="gif displaying advance operation of calculation." />
      </ul>
    </div>
  </div>

);

export default AppGuide;


