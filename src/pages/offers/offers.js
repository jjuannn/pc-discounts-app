import React, { useState } from "react";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import Container from "../../components/cardsContainer/container";
import Loading from "../../components/loading/loading";
import { useFetch } from "../../hooks/useFetch";
import { getPage } from "../../services/getList";
import "./offers.css";
import "bootstrap/dist/css/bootstrap.css";

export default function OffersPage() {
  const { page } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [pageNumber, setPageNumber] = useState(Number(page));
  const [lowerPrice, setLowerPrice] = useState(0);
  const [higherPrice, setHigherPrice] = useState(1);
  const [gameTitle, setGameTitle] = useState("");
  const { data, loading, error } = useFetch(getPage, pageNumber);

  const changeGameTitle = ({ target }) => {
    const { value } = target;
    setGameTitle(value);
  };

  const changeLowerPrice = ({ target }) => {
    const { value } = target;
    const newLowerPrice = Number(value);
    if (newLowerPrice >= higherPrice) {
      setHigherPrice(newLowerPrice + 1);
    }
    setLowerPrice(newLowerPrice);
  };

  const changeHigherPrice = ({ target }) => {
    const { value } = target;
    const newHigherPrice = Number(value);
    if (newHigherPrice <= lowerPrice) {
      setLowerPrice(newHigherPrice - 1);
    }
    setHigherPrice(newHigherPrice);
  };

  const handleNextPage = (pageNumber) => {
    setPageNumber(pageNumber + 1);
    setRedirect(true);
  };

  const handlePrevPage = (pageNumber) => {
    setPageNumber(pageNumber - 1);
    setRedirect(true);
  };

  return (
    <section className="offers-container">
      {loading && <Loading />}
      {redirect && <Redirect to={`/offers/all/page=${pageNumber}`} />}
      {error && <p>error</p>}
      {data && (
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
          <div class="collapse" id="collapseExample">
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
                <Button
                  disabled={gameTitle.length === 0}
                  text="Filter by name"
                />
              </Link>
              <hr />
            </div>
          </div>
          <h1 className="offers-title">Check out this! </h1>

          <div className="pagination-buttons-container">
            <Button
              onClick={
                pageNumber === 0
                  ? null
                  : () => {
                      handlePrevPage(pageNumber);
                    }
              }
              disabled={pageNumber === 0 ? true : false}
              text="Prev page"
            />{" "}
            <Button
              onClick={() => {
                handleNextPage(pageNumber);
              }}
              text="Next page"
            />
          </div>
          <Container>
            {" "}
            {data &&
              data.map((offer, i) => {
                return <Card {...offer} key={i} />;
              })}
          </Container>
        </>
      )}
    </section>
  );
}
