import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from ".//ModalProvider";
import SampleModal from "./SampleModal";

const MODAL_COMPONENTS = {
  first: SampleModal,
};

function ModalContainer() {
    console.log("ModalContainer >> ");
  const { type, props } = useContext(ModalStateContext);
  
  if (!type) {
    return null;
  }
  console.log("type >> "+type);
  const Modal = MODAL_COMPONENTS[type];
  const onClose = () => {};
  return createPortal(
    <>
      <Modal onClose={onClose}/>
    </>,
    document.getElementById("modal")
  );
}

export default ModalContainer;