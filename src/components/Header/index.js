import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

//import audio
import duelingAudio from '../../assets/its-time-to-duel.mp3'

export default class Header extends Component {

  state = {
    isNavOpen: false,
  }

  toggleNavOpen = () => {
    const { isNavOpen } = this.state;
    this.setState({ isNavOpen: !isNavOpen });
  }

  render() {
    const renderNav = this.state.isNavOpen 
    ? 
    <ul className="header__nav">
      <span className="header__nav--close" onClick={ () => this.toggleNavOpen() }>&times;</span>
      <li className="header_nav--listItem parallelogram">
        <NavLink to="/duel/duelboard" onClick={ () => this.toggleNavOpen() }>dueling</NavLink>
      </li>
      <li className="header_nav--listItem parallelogram">
        <NavLink to="/duel/rules" onClick={ () => this.toggleNavOpen() }>official dueling rules</NavLink>
      </li>
      <li className="header_nav--listItem parallelogram">
        <NavLink to="/duel/app-guide" onClick={ () => this.toggleNavOpen() }>how to use app</NavLink>
      </li>
    </ul> 
    :
    <div className="header__burger" onClick={ () => this.toggleNavOpen() }>
      <div className="header__burger--inner">
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
    </div>
    

    return (
      <Fragment>
        <ReactAudioPlayer
          src={duelingAudio}
          autoPlay
          volume={0.2}
        />

        <header className="header">
          <h1>y-c</h1>
          {renderNav}
        </header>
      </Fragment>
    )
  }
}
