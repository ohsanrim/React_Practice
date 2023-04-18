import React from "react";
import "../modal.css";

const AlertModal = () => {
  return (
    <div className="info_modal">
      <div className="modal_header">
        <h3>Alert Message</h3>
      </div>
      <div className="modal_body">
        <p>알림용 모달입니다.</p>
      </div>
      <div className="modal_footer">
        <button>확인</button>
      </div>
    </div>
  );
};

const ConfirmModal = () => {
  return (
    <div className="info_modal">
      <div className="modal_header">
        <h3>Confirm Message</h3>
      </div>
      <div className="modal_body">
        <p>확인용 모달입니다.</p>
      </div>
      <div className="modal_footer">
        <button className="close_btn">취소</button>
        <button className="confirm_btn">확인</button>
      </div>
    </div>
  );
};

const DeleteModal = () => {
  return (
    <div className="info_modal">
      <div className="modal_header">
        <h3>Delete Message</h3>
      </div>
      <div className="modal_body">
        <p>삭제 확인용 모달입니다.</p>
      </div>
      <div className="modal_footer">
        <button className="close_btn">취소</button>
        <button className="delete_btn">삭제</button>
      </div>
    </div>
  );
};

export default DeleteModal;
