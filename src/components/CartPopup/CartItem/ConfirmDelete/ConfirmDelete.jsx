import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ConfirmDelete.css";

export default function ConfirmDelete({ isOpen, handleClose, handleDelete }) {
  const popup = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(popup.current, {
        display: "flex",
        height: "100%",
      });
    } else {
      gsap.to(popup.current, {
        display: "none",
        height: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="confirm-delete" ref={popup}>
      <div className="confirm-delete__content">
        <p className="confirm-delete__question">Удалить из корзины ?</p>
        <button
          className="confirm-delete__button confirm-delete__button_yes"
          type="button"
          onClick={handleDelete}
        >
          ДА
        </button>
        <button
          className="confirm-delete__button confirm-delete__button_no"
          type="button"
          onClick={handleClose}
        >
          НЕТ
        </button>
      </div>
    </div>
  );
}
