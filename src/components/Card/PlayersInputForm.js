import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';

const PlayersInputForm = props => (

  <Fragment>
    <form id="players-input-form" 
          onSubmit={props.playersSubmitHandler}>
        {/* PLAYER 1 */}
        <input 
          name="player1"
          type="text"
          onChange={props.handlePlayerInput}
          value={props.player1}
          placeholder="player 1" />
        
        {/* PLAYER 2 */}
        <input
          name="player2"
          type="text"
          onChange={props.handlePlayerInput}
          value={props.player2}
          placeholder="player 2" />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          name="submit"
          value="submit" >go</button>
      </form>
      
      {/* Redirect to /duel when form submits */}
      {props.fireRedirect && (
        <Redirect to='/duel' />
      )}

    </Fragment>
);

PlayersInputForm.proptypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  handlePlayerInput: PropTypes.func.isRequired,
  playersSubmitHandler: PropTypes.func.isRequired,
  fireRedirect: PropTypes.bool.isRequired,
};

export default PlayersInputForm;