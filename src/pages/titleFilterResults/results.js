import React, { useState } from "react";
import { useFetchForFilters } from "../../hooks/useFetch";
import Container from "../../components/cardsContainer/container";
import Card from "../../components/card/card";
import Button from "../../components/button/button";
import { useParams, Redirect } from "react-router-dom";
import { getByTitle } from "../../services/getList";

export default function TitleFilterResultsPage() {
  const { page, title } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [pageNumber, setPageNumber] = useState(Number(page));
  const { data, loading, error } = useFetchForFilters(getByTitle, {
    page,
    title,
  });

  return (
    <section className="results-container">
      {redirect && (
        <Redirect to={`/offers/filter/page=${pageNumber}&title=${title}`} />
      )}
      {data && (
        <>
          <h1 className="offers-title">Looking for results with "{title}"</h1>
          <Container>
            {data.map((result, i) => {
              return <Card {...result} key={i} />;
            })}
          </Container>
        </>
      )}
    </section>
  );
}
