import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default class Dice extends Component {

  static propTypes = {
    handleLogUpdate: PropTypes.func.isRequired,
  }

  rollDoneCallback = num => {
    console.log(num);
    this.props.handleLogUpdate( `Dice rolled to ${num}`);
  }

  render() {

    return (
      <div className="dice">
        <ReactDice
          numDice={1}
          outline={true}
          outlineColor="#1e2326"
          faceColor="#8d8f91"
          dotColor="#df2327"
          rollDone={this.rollDoneCallback} />
      </div>
    )
  }
}
