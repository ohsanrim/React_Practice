import React, { useEffect, useRef } from "react";
import useOutSideClick from "./useOutSideClick";
import ModalContainer from "./MOdalContainer";

function Modal({ onClose, children }) {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);
  return (
    // <ModalContainer>
    //   <Overlay>
    //     <ModalWrap ref={modalRef}>
    //       <CloseButton onClick={handleClose}>
    //         <i className="fa-solid fa-xmark"></i>
    //       </CloseButton>
    //       <Contents>{children}</Contents>
    //     </ModalWrap>
    //   </Overlay>
    // </ModalContainer>
    <ModalContainer>
        <div className="modal_container">
            <div className="modal_wrapper" ref={modalRef}>
                <div className="modal_header">
                    모달창
                </div>
                <div className="modal_content">
                    모달입니다. 
                </div>
                <div className="modal_footer">
                    <div className="button_wrapper">
                        <button>등록</button>
                    </div>
                </div>
                
            </div>
        </div>
    </ModalContainer>
    
  );
}

export default Modal;