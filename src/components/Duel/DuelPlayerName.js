import React from 'react';
import PropTypes from 'prop-types';

const DuelPlayerName = props => {

  if(props.isEditing) {
    return (
      <div className="duelist__name">
        <input 
          className="duelist__name--input"
          type="text"
          value={props.children}
          onChange={props.handleNameEdits}
          onKeyPress={props.handleKeyPress} />

        <button 
          className="change-name-btn" 
          onClick={props.handleToggleEditing} >
          ok
        </button>
      </div>
    )
  }
  
  return (
    <div className="duelist__name" onDoubleClick={props.handleToggleEditing} >
      {props.children}
    </div>
  );
}

DuelPlayerName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default DuelPlayerName;