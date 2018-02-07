import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Log extends Component {  
  
  static propTypes = {
    logs: PropTypes.array.isRequired,
  }

  state = {
    isBtnDisplayed: false,
  }

  toggleBtnDisplay = () => {
    const { isBtnDisplayed } = this.state;

    this.setState({ isBtnDisplayed: !isBtnDisplayed })
  }

  renderLogs = (log, index) => (
    <li key={index}>{log}</li>
  );

  render() {
    const renderBtnLog = this.state.isBtnDisplayed
    ? <div className="log">
        <span onClick={ () => this.toggleBtnDisplay() }>&times;</span>
        <ul>
          {this.props.logs.map(this.renderLogs)}
        </ul>
      </div>
    : <button className="log-btn" onClick={ () => this.toggleBtnDisplay() }>show log</button>;

    return (
      <div className="log-container">
        {renderBtnLog}
      </div>
    )
  }
}