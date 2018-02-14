import React from 'react';
import PropTypes from 'prop-types'
import Modal from 'react-modal';

const ResetCard = props => {
  
  const ModalStyles = {
    overlay: {
      backgroundColor: "transparent",
    },
    content: {
      backgroundColor: "#1e2326",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      borderRadius: "none",
      border: "none",
      padding: "0",
    }
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.displayResetCard}
      shouldCloseOnOverlayClick={false}
      style={ModalStyles} >

      <div className="winnermodal">
        <h3>the winner is</h3>
        <h1>{props.winner}</h1>
        <div className="winnermodal__btns">
          <button type="button" onClick={props.handleNewGameBtnClick}>start a new game</button>
          <button type="button" onClick={props.handleNextRoundBtnClick}>next round</button>
        </div>
      </div>
    </Modal>
  );
}

ResetCard.propTypes = {
  displayResetCard: PropTypes.bool.isRequired,
  winner: PropTypes.string,
  handleNewGameBtnClick: PropTypes.func.isRequired,
  handleNextRoundBtnClick: PropTypes.func.isRequired,

}

export default ResetCard;