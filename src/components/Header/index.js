import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  static propTypes = {
    toggleHeaderExistance:  PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.toggleHeaderExistance();
  }

  componentWillUnmount() {
    this.props.toggleHeaderExistance();
  }

  render() {
    return (
      <header>
        <img src={ require('../../assets/yugioh-logo.png') } alt="classic yu-gi-oh logo" />
        <ul>
          <li><NavLink to="/duel/duelboard">dueling</NavLink></li>
          <li><NavLink to="/duel/rules">official dueling rules</NavLink></li>
          <li><NavLink to="/duel/app-guide">how to use app</NavLink></li>
        </ul>
      </header>
    )
  }
}
