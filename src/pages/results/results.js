import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getByPriceBetween } from "../../services/getList";
import Container from "../../components/cardsContainer/container";
import Card from "../../components/card/card";
import Button from "../../components/button/button";
import Loading from "../../components/loading/loading";
import { useFetchForFilters } from "../../hooks/useFetch";
import "./results.css";

export default function ResultsPage() {
  const { page, lower, higher } = useParams();
  const [pageNumber, setPageNumber] = useState(Number(page));
  const [redirect, setRedirect] = useState(false);
  const { data, error, loading } = useFetchForFilters(getByPriceBetween, {
    pageNumber,
    lower,
    higher,
  });

  const handleNextPage = (pageNumber) => {
    setPageNumber(pageNumber + 1);
    setRedirect(true);
  };

  const handlePrevPage = (pageNumber) => {
    setPageNumber(pageNumber - 1);
    setRedirect(true);
  };

  return (
    <section className="results-container">
      {redirect && (
        <Redirect to={`/offers/filter/page=${pageNumber}&lower=10&higher=27`} />
      )}
      {error && <p>"Error"</p>}
      {loading && <Loading />}
      {data && (
        <>
          <h1 className="offers-title">
            Looking for offers between ${lower} and ${higher}
          </h1>
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
