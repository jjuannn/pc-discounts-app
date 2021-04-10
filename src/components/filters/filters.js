import React from "react";
import useFilters from "../../hooks/useFilters";
import Button from "../button/button";
import { Link } from "react-router-dom";
export default function Filters(props) {
  const {
    higherPrice,
    lowerPrice,
    gameTitle,
    changeGameTitle,
    changeLowerPrice,
    changeHigherPrice,
  } = useFilters();
  return (
    <>
      <p>
        <button
          className="filter-button"
          text="Show filters"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Filters
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="filters-container">
          <label htmlFor="lower-price">
            <strong>Lower Price: ${lowerPrice}</strong>
          </label>
          <input
            className="price-filter"
            value={lowerPrice}
            onChange={changeLowerPrice}
            placeholder="lower price"
            min="0"
            max="99"
            name="lower-price"
            type="range"
          />
          <label htmlFor="higher-price">
            <strong>Higher Price: ${higherPrice}</strong>
          </label>
          <input
            className="price-filter"
            value={higherPrice}
            onChange={changeHigherPrice}
            placeholder="higher price"
            min="1"
            max="100"
            name="higher-price"
            type="range"
          />
          <Link
            to={`/offers/filter/page=0&lower=${lowerPrice}&higher=${higherPrice}`}
          >
            <Button text="Filter by prices" />
          </Link>
          <hr />
          <label htmlFor="title-filter">
            <strong>Or you can filter by name: </strong>
          </label>
          <input
            className="title-filter"
            value={gameTitle}
            name="title-filter"
            onChange={changeGameTitle}
            placeholder="Introduce a name"
            type="text"
          />
          <Link to={`/offers/filter/title=${gameTitle}`}>
            <Button disabled={gameTitle.length === 0} text="Filter by name" />
          </Link>
          <hr />
        </div>
      </div>
    </>
  );
}
