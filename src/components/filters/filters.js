import React from "react";
import useFilters from "../../hooks/useFilters";
import Button from "../button/button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const TitleFilter = styled.input`
  border: 2px solid black;
  text-align: center;
  line-height: 40px;
  margin-bottom: 20px;
`;

const PriceFilter = styled.input`
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  border: none;
  padding: 10px;
  font-family: var(--bold-kanit);
  color: black;
  background: var(--gray2);
  cursor: pointer;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 10px;
`;

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
        <FilterButton
          text="Show filters"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Filters
        </FilterButton>
      </p>
      <div className="collapse" id="collapseExample">
        <FiltersContainer>
          <label htmlFor="lower-price">
            <strong>Lower Price: ${lowerPrice}</strong>
          </label>
          <PriceFilter
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
          <PriceFilter
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
          <TitleFilter
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
        </FiltersContainer>
      </div>
    </>
  );
}
