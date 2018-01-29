import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default class Dice extends Component {

  //use callback to create a duel log.
  rollDoneCallback = () => {
    console.log('Dice finish rolling');
  }

  render() {

    return (
      <div className="dice">
        <ReactDice
          numDice={1}
          outline={true}
          outlineColor="#1e2326"
          faceColor="#8d8f91"
          dotColor="#da4453"
          rollDone={this.rollDoneCallback} />
      </div>
    )
  }
}
