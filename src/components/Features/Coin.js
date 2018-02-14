import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Coin extends Component {

  static propTypes = {
    handleLogUpdate: PropTypes.func.isRequired,
  }

  state = {
    headTail: "T",
    flips: 0,
  }

  onCoinClick = () => {
    const { flips } = this.state;
    const result = Math.floor( Math.random()*2 + 1);
    
    if(result === 1) {
      this.props.handleLogUpdate( "Coin flipped to tails" );
      this.setState({ headTail: "T", flips: flips + 1 });
    } else {
      this.props.handleLogUpdate( "coin flipped to heads" );
      this.setState({ headTail: "H", flips: flips + 1 });
    }
  }
  

  render() {
    const { headTail } = this.state;

    return (
      <div className="coin__wrapper" onClick={ () => this.onCoinClick() }>
        <span className="coin__shape">{headTail}</span>


        <ReactCSSTransitionGroup
          component="div"
          transitionName="coin"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span key={this.state.flips} className="coin__flip">{headTail}</span>
        </ReactCSSTransitionGroup>
      </div>
    )

    
  }
}
