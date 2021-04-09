import React from "react";
import { useFetchForFilters } from "../../hooks/useFetch";
import Container from "../../components/cardsContainer/container";
import Card from "../../components/card/card";
import { useParams } from "react-router-dom";
import { getByTitle } from "../../services/getList";
import Loading from "../../components/loading/loading";
export default function TitleFilterResultsPage() {
  const { page, title } = useParams();
  const { data, loading, error } = useFetchForFilters(getByTitle, {
    page,
    title,
  });

  return (
    <section className="results-container">
      {loading && <Loading />}
      {error && <p>Error</p>}
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
