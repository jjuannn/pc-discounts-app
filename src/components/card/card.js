import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

export default function Card({
  normalPrice,
  salePrice,
  savings,
  thumb,
  title,
  steamRatingPercent,
}) {
  return (
    <div className="card game-card">
      <img className="card-img-top" loading="lazy" src={thumb} alt="" />
      <div className="card-body">
        <h5 className="card-title game-title">{title}</h5>
        <p className="card-text">
          <strong>
            <s className="original-price">${normalPrice}</s> ${salePrice} <br />
            Saving {savings}% <br />
            <i className="fas fa-thumbs-up"></i> {steamRatingPercent}%
          </strong>
        </p>
      </div>
    </div>
  );
}
