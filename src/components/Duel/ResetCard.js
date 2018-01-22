import React from 'react';
import PropTypes from 'prop-types'
import Modal from 'react-modal';

const ResetCardModalStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    top: "100px",
    right: "20px",
    bottom: "20px",
    left: "20px",
    borderRadius: "0.3em",
    border: "none",
    padding: "0",
  }
}

const ResetCard = props => (
  <Modal
    ariaHideApp={false}
    isOpen={props.displayResetCard}
    shouldCloseOnOverlayClick={false}
    style={ResetCardModalStyles} >

    <div id="reset-card">
      <div>
        <h2>game over</h2>
        <h3>the winner is</h3>
        <h1>{props.winner}</h1>
        <div className="buttons">
          <button type="button" onClick={props.handleNewGameBtnClick}>start a new game</button>
          <button type="button" onClick={props.handleNextRoundBtnClick}>next round</button>
        </div>
      </div>
    </div>
  </Modal>
);

ResetCard.propTypes = {
  displayResetCard: PropTypes.bool.isRequired,
  winner: PropTypes.string,
  handleNewGameBtnClick: PropTypes.func.isRequired,
  handleNextRoundBtnClick: PropTypes.func.isRequired,

}

export default ResetCard;