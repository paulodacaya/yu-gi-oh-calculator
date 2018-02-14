import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default class Dice extends Component {

  onRollDone = () => {
    return null
  }

  render() {

    return (
      <div className="dice">
        <ReactDice
          numDice={1}
          outline={true}
          outlineColor="#1e2326"
          faceColor="#434f55"
          dotColor="white"
          dieSize={50}
          rollDone={this.onRollDone} />
      </div>
    )
  }
}
