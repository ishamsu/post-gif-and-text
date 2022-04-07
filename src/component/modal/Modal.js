import React from 'react';
import ReactDOM from 'react-dom';
import './model.css';
const tempFun =(e,onBtnClick)=>{
  onBtnClick()
  e.stopPropagation()
}


const Modal = ({ isShowing, hide,body,title,onBtnClick }) => isShowing ? ReactDOM.createPortal(

  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={
      ()=>{
        onBtnClick()
        hide()
      }
      }>
      <div className="modal" onClick={(e)=>{tempFun(e,onBtnClick)}}>
      <div className='dialog-title'>{title}</div>
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p className='dialog-content'>
       {body}
              </p>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;