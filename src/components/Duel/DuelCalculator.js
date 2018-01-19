import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

//custom Modal Styles: check react-modal DOCs for more info.
const CalculatorModalStyles = {
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

const DuelCalculator = props => (

  <Fragment>
    <button className="lp-btn" onClick={props.handleToggleCalcOpen}>calculate</button>

    <Modal
      ariaHideApp={false}
      isOpen={props.calcIsOpen}
      onRequestClose={props.handleToggleCalcOpen}
      style={CalculatorModalStyles} >

      <form 
        id="calculator" 
        name="calculator" 
        onSubmit={props.CalcSubmitHandler} >
        <input 
          readOnly
          type="text" 
          name="calculate" 
          placeholder="check guide for more info"
          onChange={props.handlePlayerInput}
          value={props.calculate} />

        <button className="close" onClick={props.handleToggleCalcOpen}>X</button>
        <div className="buttons">
          <button className="num" type="button" value="AC" onClick={props.handleClearDisplayBtn}>AC</button>
          <button className="sym" type="button" value="-" onClick={props.handleCalcBtnClick}>-</button>
          <button className="sym" type="button" value="+" onClick={props.handleCalcBtnClick}>+</button>
          <button className="sym" type="button" value="*" onClick={props.handleCalcBtnClick}>X</button>
          <button className="num" type="button" value="7" onClick={props.handleCalcBtnClick}>7</button>
          <button className="num" type="button" value="8" onClick={props.handleCalcBtnClick}>8</button>
          <button className="num" type="button" value="9" onClick={props.handleCalcBtnClick}>9</button>
          <button className="sym" type="button" value="/" onClick={props.handleCalcBtnClick}>/</button>
          <button className="num" type="button" value="4" onClick={props.handleCalcBtnClick}>4</button>
          <button className="num" type="button" value="5" onClick={props.handleCalcBtnClick}>5</button>
          <button className="num" type="button" value="6" onClick={props.handleCalcBtnClick}>6</button>
          <button className="sym" type="button" value="(" onClick={props.handleCalcBtnClick}>(</button>
          <button className="num" type="button" value="1" onClick={props.handleCalcBtnClick}>1</button>
          <button className="num" type="button" value="2" onClick={props.handleCalcBtnClick}>2</button>
          <button className="num" type="button" value="3" onClick={props.handleCalcBtnClick}>3</button>
          <button className="sym" type="button" value=")" onClick={props.handleCalcBtnClick}>)</button>
          <button className="num" type="button" value="0" onClick={props.handleCalcBtnClick}>0</button>
          <button className="num" type="button" value="." onClick={props.handleCalcBtnClick}>.</button>
          <button className="num" type="button" value="del" onClick={props.handleCalcDelBtn}>del</button>
          <button className="sub" type="submit" value="submit">OK</button>
        </div>
      </form>
    </Modal>
  </Fragment>
);

DuelCalculator.propTypes = {
  calcIsOpen: PropTypes.bool.isRequired,
  handleToggleCalcOpen: PropTypes.func.isRequired,
  handleCalcBtnClick: PropTypes.func.isRequired,
  calculate: PropTypes.string.isRequired,
  handleClearDisplayBtn: PropTypes.func.isRequired,
  handleCalcDelBtn: PropTypes.func.isRequired,
  CalcSubmitHandler: PropTypes.func.isRequired,
};

export default DuelCalculator;

