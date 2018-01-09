import React, { Component, Fragment, } from 'react';
import Modal from 'react-modal';

//custom Modal Styles: check react-modal DOCs for more info.
const customModalStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    top: "50%",
    right: "50%",
    bottom: "",
    left: "",
    transform: "translate(50%, -50%)",
    borderRadius: "0.3em",
    border: "none",
    padding: "0",
  }
}

export default class DuelCalculator extends Component {

  state = {
    modalIsOpen: false,
    calculation: "",
  }

  openModal = () => {
    this.setState({ 
      modalIsOpen: true 
    })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }



  render() {
    return (
      <Fragment>
        <button className="lp-btn" onClick={this.openModal}>calculate</button>

        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          style={customModalStyles} >

          <form id="calculator" name="calculator">
            <input 
              readOnly
              type="text" 
              name="input" 
              placeholder="Check guide for more info" />

            <button className="close" onClick="this.closeModal">X</button>
            <div className="buttons">
              <button className="sym" type="button" value="-">-</button>
              <button className="sym" type="button" value="+">+</button>
              <button className="sym" type="button" value="*">X</button>
              <button className="sym" type="button" value="/">/</button>
              <button className="num" type="button" value="7">7</button>
              <button className="num" type="button" value="8">8</button>
              <button className="num" type="button" value="9">9</button>
              <button className="sym" type="button" value="(">(</button>
              <button className="num" type="button" value="4">4</button>
              <button className="num" type="button" value="5">5</button>
              <button className="num" type="button" value="6">6</button>
              <button className="sym" type="button" value=")">)</button>
              <button className="num" type="button" value="1">1</button>
              <button className="num" type="button" value="2">2</button>
              <button className="num" type="button" value="3">3</button>
              <button type="submit" value="submit"></button>
              <button className="num" type="button" value="0">0</button>
              <button className="num" type="button" value=".">.</button>
              <button className="num" type="button" value="del">del</button>
              <button className="sub" type="submit" value="submit">OK</button>
            </div>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

