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
    padding: "0",
    borderRadius: "0.3em",
    border: "none",
  }
}

export default class DuelCalculator extends Component {

  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    })
  }

  render() {
    return (
      <Fragment>
        <div className="lp-btns">
          <button onClick={this.openModal}>direct lifepoints</button>
          <button>calculate</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          style={customModalStyles} >

          <form id="calculator">
            <input type="text" name="input" placeholder="read 'how to use app' for more info"/>
            <div class="buttons">
              <button type="button" value="+">+</button>
              <button type="button" value="-">-</button>
              <button type="button" value="*">X</button>
              <button type="button" value="/">/</button>
              <button type="button" value="(">(</button>
              <button type="button" value=")">)</button>
              <button type="button" value="7">7</button>
              <button type="button" value="8">8</button>
              <button type="button" value="9">9</button>
              <button type="button" value="4">4</button>
              <button type="button" value="5">5</button>
              <button type="button" value="6">6</button>
              <button type="button" value="1">1</button>
              <button type="button" value="2">2</button>
              <button type="button" value="3">3</button>
              <button type="button" value="0">0</button>
              <button type="button" value="c">)</button>
              <button type="button" value="del">del</button>
              <button type="submit" value="submit">OK</button>
            </div>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

