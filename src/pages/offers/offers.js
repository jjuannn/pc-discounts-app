import React, { useState } from "react";
import { useParams, Redirect } from "react-router";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import PaginationButtonsContainer from "../../components/paginationButtons/paginationButtons";
import Container from "../../components/cardsContainer/container";
import Loading from "../../components/loading/loading";
import Filters from "../../components/filters/filters";
import { useFetch } from "../../hooks/useFetch";
import { getPage } from "../../services/getList";
import Title from "../../components/title/title";
import ErrorMessage from "../../components/errorMessage/error";
import styled from "@emotion/styled";

const OffersContainer = styled.section`
  flex: 1;
  width: 90%;
  margin: auto;
  text-align: center;
  margin-bottom: 50px;
`;

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
    <OffersContainer>
      {loading && <Loading />}
      {redirect && <Redirect to={`/offers/all/page=${pageNumber}`} />}
      {error && <ErrorMessage text={error.message} />}
      {data && (
        <>
          <Filters />
          <Title text="Check out this!" />
          <PaginationButtonsContainer>
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
          </PaginationButtonsContainer>
          <Container>
            {" "}
            {data &&
              data.map((offer, i) => {
                return <Card {...offer} key={i} />;
              })}
          </Container>
        </>
      )}
    </OffersContainer>
  );
}
