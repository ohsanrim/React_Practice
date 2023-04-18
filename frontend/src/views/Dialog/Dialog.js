import React from 'react';
import './dialog.css';

function Dialog(props) {
  return (
    <div className="popup-overlay">
        <div className="info_modal popup-overlay ">
            <div className="modal_header">
                <h3>{props.header}</h3>
            </div>
            <div className="modal_body">
                <p>{props.msg}</p>
            </div>
            
            <div className="modal_footer">
                {(() => {
                // props.type == "alert" ? 
                // <button className="success_btn" onClick={props.onClose}>취소</button>
                // : 
                // <div>
                //     <button className="close_btn" onClick={props.onClose}>취소</button>
                //     <button className="confirm_btn"
                //     onClick={() => {
                //             props.onClose();
                //             props.successFunc();
                //             }}
                //     > 확인</button> 
                // </div>
                switch (props.type){
                    case 'alert'
                    : return <button className="success_btn" onClick={props.onClose}>확인</button>
                    case 'confirm'
                    : return <div className="dialog_btn_wrapper">
                         <button className="close_btn" onClick={props.onClose}>취소</button>
                         <button className="confirm_btn"
                         onClick={() => {
                                 props.onClose();
                                 props.successFunc();
                                 }}
                         > 확인</button> 
                    </div>
                    case 'delete'
                    : return <div className="dialog_btn_wrapper">
                    <button className="close_btn" onClick={props.onClose}>취소</button>
                    <button className="delete_btn"
                    onClick={() => {
                            props.onClose();
                            props.successFunc();
                            }}
                    > 확인</button> 
               </div>
                }
            })()}
                {/* <button className="close_btn" onClick={props.onClose}>취소</button>
                <button className="confirm_btn"
                onClick={() => {
                        props.onClose();
                        props.successFunc();
                        }}
                > 확인</button> */}
            </div>
        </div>
    </div>
    
  );
}

export default Dialog;