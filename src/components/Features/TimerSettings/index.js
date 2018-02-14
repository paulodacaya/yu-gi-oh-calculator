import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

//import components
import Clock from './Clock';
import Controls from './Controls';

const TimerSettings = props => {
  
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
      width: '280px',
      height: '287px',
    }
  }
  
  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isClockSettingsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.toggleClockSettings}
      style={modalStyles}>
      <div className="timersettings">
        <div className="timersettings__clock">
          <Clock 
            totalSeconds={props.totalSeconds} 
            onLogUpdate={props.onLogUpdate}/>
        </div>

        <Controls
          running={props.running}
          handleStart={props.onStart}
          handleStop={props.onStop}
          handleReset={props.onReset}
          handlePlusMinus={props.onPlusMinus}/>
      </div>
    </Modal>
  )
}

TimerSettings.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onPlusMinus: PropTypes.func.isRequired,
  onLogUpdate: PropTypes.func.isRequired,
  isClockSettingsOpen: PropTypes.bool.isRequired,
  toggleClockSettings: PropTypes.func.isRequired,
}

export default TimerSettings;