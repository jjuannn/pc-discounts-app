import offerMapper from "../mapper/offer";
const BASE_URL = "https://www.cheapshark.com/api/1.0/deals?storeID=1&";

export function getPage(page) {
  return fetch(`${BASE_URL}pageNumber=${page}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse.map((offer) => {
        return offerMapper(offer);
      });
    })
    .then((offers) => {
      return offers;
    });
}

export function getByLowerThan(price) {
  return fetch(`${BASE_URL}lowerPrice=${price}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

export function getByHigherThan(price) {
  return fetch(`${BASE_URL}upperPrice=${price}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

export function getByTitle(title) {
  return fetch(`${BASE_URL}title=${title}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}
