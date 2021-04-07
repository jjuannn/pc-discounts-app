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

export default function OffersPage() {
  const { page } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [pageNumber, setPageNumber] = useState(Number(page));
  const [lowerPrice, setLowerPrice] = useState(0);
  const [higherPrice, setHigherPrice] = useState(1);

  const { data, loading, error } = useFetch(getPage, pageNumber);

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
          <h1 className="offers-title">Check out this! </h1>
          <div className="filters-container">
            <label htmlFor="lower-price">
              <strong>Lower Price: ${lowerPrice}</strong>
            </label>
            <input
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
          </div>
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
