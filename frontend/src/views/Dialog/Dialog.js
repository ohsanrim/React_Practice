import React from 'react';
import './dialog.css';

function Dialog({type, header, msg, onClose, successFunc}) {
  return (
    <div className="popup-overlay">
        <div className="info_modal popup-overlay ">
            <div className="modal_header">
                <h3>{header}</h3>
            </div>
            <div className="modal_body">
                <p>{msg}</p>
            </div>
            
            <div className="modal_footer">
                {(() => {
                // type == "alert" ? 
                // <button className="success_btn" onClick={onClose}>취소</button>
                // : 
                // <div>
                //     <button className="close_btn" onClick={onClose}>취소</button>
                //     <button className="confirm_btn"
                //     onClick={() => {
                //             onClose();
                //             successFunc();
                //             }}
                //     > 확인</button> 
                // </div>
                switch (type){
                    case 'alert'
                    : return <button className="success_btn" onClick={onClose}>확인</button>
                    case 'confirm'
                    : return <div className="dialog_btn_wrapper">
                         <button className="close_btn" onClick={onClose}>취소</button>
                         <button className="confirm_btn"
                         onClick={() => {
                                 onClose();
                                 successFunc();
                                 }}
                         > 확인</button> 
                    </div>
                    case 'delete'
                    : return <div className="dialog_btn_wrapper">
                    <button className="close_btn" onClick={onClose}>취소</button>
                    <button className="delete_btn"
                    onClick={() => {
                            onClose();
                            successFunc();
                            }}
                    > 확인</button> 
               </div>
                }
            })()}
                {/* <button className="close_btn" onClick={onClose}>취소</button>
                <button className="confirm_btn"
                onClick={() => {
                        onClose();
                        successFunc();
                        }}
                > 확인</button> */}
            </div>
        </div>
    </div>
    
  );
}

export default Dialog;
