import React, { useState } from "react";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import Container from "../../components/cardsContainer/container";
import Loading from "../../components/loading/loading";
import Filters from "../../components/filters/filters";
import { useFetch } from "../../hooks/useFetch";
import { getPage } from "../../services/getList";
import "./offers.css";
import "bootstrap/dist/css/bootstrap.css";

export default function OffersPage() {
  const { page } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [pageNumber, setPageNumber] = useState(Number(page));

  const { data, loading, error } = useFetch(getPage, pageNumber);

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
      {error && <p className="error-message">{error.message}</p>}
      {data && (
        <>
          <Filters />
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
