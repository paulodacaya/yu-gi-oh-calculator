import React, { Fragment, } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const DuelCalculator = props => {

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(67, 79, 85, 0.5)',
    },
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      width: '280px',
      height: '500px',
    }
  }

  return (
    <Fragment>
      <div className="duelist__btns">
        <button className="duelist__btns--undo parallelogram-blue" onClick={props.handleUndoBtnClick}>undo</button>
        <button className="duelist__btns--calculate parallelogram-blue" onClick={props.handleToggleCalcOpen}>calc</button>
      </div>
      
      <Modal
        ariaHideApp={false}
        isOpen={props.calcIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={props.handleToggleCalcOpen}
        style={modalStyles} >

        <form 
          className="calculator"
          name="calculator" 
          onSubmit={props.CalcSubmitHandler} >
          <input 
            readOnly
            className="calculator__inputscreen"
            type="text" 
            name="calculate" 
            onChange={props.handlePlayerInput}
            value={props.calculate} />

          <div className="calculator__btns">
            <button className="sym" type="button" value="AC" onClick={props.handleClearDisplayBtn}>AC</button>
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
            <button className="sym" type="button" value="del" onClick={props.handleCalcDelBtn}>del</button>
            <button className="sym" type="submit" value="submit">OK</button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
}

DuelCalculator.propTypes = {
  calcIsOpen: PropTypes.bool.isRequired,
  handleToggleCalcOpen: PropTypes.func.isRequired,
  handleCalcBtnClick: PropTypes.func.isRequired,
  calculate: PropTypes.string.isRequired,
  handleClearDisplayBtn: PropTypes.func.isRequired,
  handleCalcDelBtn: PropTypes.func.isRequired,
  CalcSubmitHandler: PropTypes.func.isRequired,
  handleUndoBtnClick: PropTypes.func.isRequired,
};

export default DuelCalculator;

