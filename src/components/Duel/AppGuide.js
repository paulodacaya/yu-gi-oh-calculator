import React from 'react';

const AppGuide = () => (
  <div className="guide">
    <h2>Welcome to the Dueling Application</h2>
      
    <main className="guide__content">
      <h4 className="guide__content--phrase">dueling made easy</h4>
      
      <section>
        <h4>navigation</h4>
        <p><strong>Dueling:</strong> The meat of the app, with all your dueling needs.</p>
        <p><strong>Official Dueling Rules:</strong> Official Konami Yu-Gi-Oh Rulebook Version 10.</p>
        <p><strong>How to use app:</strong> The current tab you are in describing how to use the app.</p>
      </section>
      
      <hr />

      <section>
        <h4>features</h4>
        <p><strong>Change duelist name:</strong> double click the duelist name and enter desired name. Hit 'enter' on keyboard or click 'OK' to resume.</p>
        <p><strong>Update lifepoints:</strong> To initiate, click on the "CALC" button associated with the duelist you want to affect. A fancy calculator will pop up.</p>
        <p>For single digit calculations, please initiate with -, + or * followed by the difference. For example:</p>
        <p>-500</p>
        <p>+800</p>
        <p>*2</p>
        <p><span>Think</span> about it like this:</p>
        <p>(Your lifepoints) - 500</p>
        <p>(Your lifepoints) + 800</p>
        <img src={ require( "../../assets/calculate.gif" ) } alt="gif demonstration how to use calculator in app."/>

        <p>However, you can expand this with equations of your choice:</p>
        <p>-1200+2*4</p>
        <p>-(1200-800)</p>
        <p><span>This is most preffered way if you have chaining calculations to make.</span></p>

        <p><strong>Undo calculation:</strong> This will undo the most recent calculation only. Cannot undo further calculations.</p>
        <p><strong>Winner screen:</strong> When a duelist losses a battle, a winner screen will pop up. You have either the option to continue or start new game. Note: starting a new game will reset your name as well, so change it if desired.</p>
        <p><strong>Coin flip:</strong> Click on coin for simple coin flip, heads or tails.</p>
        <p><strong>Die roll:</strong> Roll the dice by clicking on it.</p>
        <p><strong>Timer:</strong> You can access the timer settings from either clicking the timer on the duelboard or clicking the timer icon in the feature box. Settings include:</p>
        <p>Adjust initial timer start</p>
        <p>Start/Stop</p>
        <p>Reset back to default of 40 minutes</p>
        <p><strong>Log:</strong> Displays a log of actions performed</p>
      </section>

      <hr />
      
      <section>
        <h4>Credit</h4>
        <p><strong>developer:</strong> Paulo Dacaya</p>
        <p><strong>Author:</strong> Paulo Dacaya</p>
      </section>
    </main>  
  </div>
);

export default AppGuide;


