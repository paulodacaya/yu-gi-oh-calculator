import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

//import audio
import duelingAudio from '../../assets/its-time-to-duel.mp3'

export default class Header extends Component {

  static propTypes = {
    toggleHeaderExistsProperty:  PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.toggleHeaderExistsProperty();
  }

  componentWillUnmount() {
    this.props.toggleHeaderExistsProperty();
  }

  render() {
    return (
      <Fragment>
        <ReactAudioPlayer
          src={duelingAudio}
          autoPlay
          volume={0.2}
        />

        <header>
          <img src={ require('../../assets/yugioh-logo.png') } alt="classic yu-gi-oh logo" />
          <ul>
            <li><NavLink to="/duel/duelboard">dueling</NavLink></li>
            <li><NavLink to="/duel/rules">official dueling rules</NavLink></li>
            <li><NavLink to="/duel/app-guide">how to use app</NavLink></li>
          </ul>
        </header>
      </Fragment>
    )
  }
}
