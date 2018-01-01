import React, { Component, Fragment, } from 'react';

import YugiohLogo from '../img/yugioh-logo.png';

//CSS
import '../css/index.css';

export default class App extends Component {
  
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="header">
            <img src={YugiohLogo} alt="classic yu-gi-oh logo"/>
            <h2>dueling application</h2>
            <p>please enter the names of the two duelist!</p>
          </div>

          <form id="players-input-form">
            <input 
              type="text"
              placeholder="player 1" />
            
            <input
              type="text"
              placeholder="player 2" />

            <button
              type="submit"
              name="submit"
              value="submit" >go</button>
          </form>
        </div>




        {/* <div className="duel-container">
          <header>
            <h6>back button(img)</h6>
            <h3>its time to d-d-d-duel!</h3>
            <ul>
              <li>dueling rules</li>
              <li>how to use app</li>
            </ul>
          </header>

          <main>
            <div className="player1">
              <span>player1 name</span>
              <div>
              <h6>undo button (img)</h6>
                <p>lp</p>
                <h4>8000</h4>
              </div>
              <button>direct lifepoints</button>
              <button>direct lifepoints</button>
            </div>

            <div className="player2">
            <span>player1 name</span>
              <div>
                <p>lp</p>
                <h4>8000</h4>
              </div>
              <button>direct lifepoints</button>
              <button>direct lifepoints</button>
            </div>
          </main>
        </div> */}

      </Fragment>
    );
  }
}

