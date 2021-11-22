import React from "react";
import "./index.css";
export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
          <figure>
            <img src={data.i.imageUrl} alt={data.l} />
          </figure>
          <div className="card-info">
            <h3>{data.l}</h3>
            <p>{data.q}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
