import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const PlayersInputForm = props => (
  <Fragment>
    <form className="intro__form" onSubmit={props.playersSubmitHandler}>
      <fieldset>
        <label htmlFor="duelist1" hidden>duelist 1</label>
        <input id="duelist1" className="intro__form--input first" placeholder="dueslist 1" 
          name="duelist1" type="text" value={props.duelist1}
          onChange={props.handlePlayerInput} />
        <label htmlFor="duelist2" hidden>duelist 2</label>
        <input id="duelist2" className="intro__form--input" placeholder="duelist 2" 
          name="duelist2" type="text" value={props.duelist2}
          onChange={props.handlePlayerInput} />
      </fieldset>
      <button className ="intro__form--submitbtn" type="submit" name="submit" value="submit" >go</button>
    </form>
      
    {props.fireRedirect && ( <Redirect to='/duel' /> )}
  </Fragment>
);

PlayersInputForm.proptypes = {
  duelist1: PropTypes.string.isRequired,
  duelist2: PropTypes.string.isRequired,
  handlePlayerInput: PropTypes.func.isRequired,
  playersSubmitHandler: PropTypes.func.isRequired,
  fireRedirect: PropTypes.bool.isRequired,
};

export default PlayersInputForm;