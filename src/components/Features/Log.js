import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const Log = props => {  
  
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(67, 79, 85, 0.5)',
    },
    content: {
      backgroundColor: '#1e2326',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      width: '380px',
      height: '450px',
    }
  }

  const renderLogs = (log, index) => (
    <li key={index}>{ `${index + 1}. ${log}` }</li>
  );

  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isLogOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.toggleLogOpen}
      style={modalStyles}>

      <div className="log">
        <h6>log</h6>
        <ul className="log__list">
          {props.logs.map( renderLogs )}
        </ul>
      </div>
      
    </Modal>
  )
}

Log.propTypes = {
  logs: PropTypes.array.isRequired,
  isLogOpen: PropTypes.bool.isRequired,
  toggleLogOpen: PropTypes.func.isRequired,
}

export default Log;