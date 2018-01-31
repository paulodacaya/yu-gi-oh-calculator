import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Coin extends Component {

  state = {
    headTail: "tail",
    flips: 0,
  }

  onCoinClick = () => {
    const { flips } = this.state;
    const result = Math.floor( Math.random()*2 + 1);

    return result === 1 ? this.setState({ headTail: "tail", flips: flips + 1 }) 
                        : this.setState({ headTail: "head", flips: flips + 1 });
  }
  

  render() {
    const { headTail } = this.state;

    return (
      <Fragment>
        <div className="coin" onClick={ () => this.onCoinClick() }>
          <span>{headTail}</span>
        </div>

        <ReactCSSTransitionGroup component="div" transitionName="coin-flip" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div key={this.state.flips} className="coin coin-display">{this.state.headTail}</div>
        </ReactCSSTransitionGroup>
      </Fragment>
    )

    
  }
}
