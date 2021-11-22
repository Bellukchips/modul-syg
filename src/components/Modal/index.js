import React from "react";
import "./index.css";
export default function index({ isShow, data, onCancel }) {
  return (
    <div
      className={!isShow ? "hidden" : ""}
      datacy="
modal-delete"
    >
      <div className="modal-bg" onClick={onCancel}></div>
      <div className="modal">
        {data && <img src={data.i.imageUrl} alt="sesuatu" />}
      </div>
    </div>
  );
}
