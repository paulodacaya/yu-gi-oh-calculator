import React from 'react';
import PropTypes from 'prop-types';

const PlayersInputForm = props => (

  <form id="players-input-form">
      <input 
        type="text"
        placeholder="player 1" />
      
      <input
        type="text"
        placeholder="player 2" />

      <button
        type="submit"
        name="submit"
        value="submit" >go</button>
    </form>
);

export default PlayersInputForm;