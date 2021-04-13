import React from "react";
import { useFetchForFilters } from "../../hooks/useFetch";
import Container from "../../components/cardsContainer/container";
import Card from "../../components/card/card";
import { useParams } from "react-router-dom";
import { getByTitle } from "../../services/getList";
import Loading from "../../components/loading/loading";
import Title from "../../components/title/title";
import ErrorMessage from "../../components/errorMessage/error";
import styled from "@emotion/styled";

const ResultsContainer = styled.section`
  flex: 1;
  width: 90%;
  margin: auto;
  text-align: center;
  margin-bottom: 50px;
`;

export default function TitleFilterResultsPage() {
  const { page, title } = useParams();
  const { data, loading, error } = useFetchForFilters(getByTitle, {
    page,
    title,
  });

  return (
    <ResultsContainer>
      {loading && <Loading />}
      {error && <ErrorMessage text={error.message} />}
      {data && (
        <>
          <Title
            text={
              data.length === 0
                ? `Oops! There is no results for ${title}`
                : `Looking for results with ${title}`
            }
          />
          <Container>
            {data.map((result, i) => {
              return <Card {...result} key={i} />;
            })}
          </Container>
        </>
      )}
    </ResultsContainer>
  );
}
