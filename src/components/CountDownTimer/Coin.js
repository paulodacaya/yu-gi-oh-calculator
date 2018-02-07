import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Coin extends Component {

  static propTypes = {
    handleLogUpdate: PropTypes.func.isRequired,
  }

  state = {
    headTail: "tail",
    flips: 0,
  }

  onCoinClick = () => {
    const { flips } = this.state;
    const result = Math.floor( Math.random()*2 + 1);
    
    if(result === 1) {
      this.props.handleLogUpdate( "Coin flipped to tails" );
      this.setState({ headTail: "tail", flips: flips + 1 });
    } else {
      this.props.handleLogUpdate( "coin flipped to heads" );
      this.setState({ headTail: "head", flips: flips + 1 });
    }
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
