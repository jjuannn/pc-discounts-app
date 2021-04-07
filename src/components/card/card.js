import React from "react";
import Button from "../button/button";
import "bootstrap/dist/css/bootstrap.css";

import "./card.css";

export default function Card({
  dealID,
  normalPrice,
  salePrice,
  savings,
  thumb,
  title,
}) {
  return (
    <div className="card game-card">
      <img className="card-img-top" loading="lazy" src={thumb} alt="" />
      <div className="card-body">
        <h5 className="card-title game-title">{title}</h5>
        <p className="card-text">
          <strong>
            <s className="original-price">${normalPrice}</s> ${salePrice} <br />
            Saving {Math.floor(savings)}%
          </strong>
        </p>
        <a href={`/offers/id=${dealID}`}>
          <Button text="View details" />
        </a>
      </div>
    </div>
  );
}
