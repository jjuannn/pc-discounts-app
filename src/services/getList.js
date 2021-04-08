import offerMapper from "../mapper/offer";
const BASE_URL = "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&";

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

export function getByPriceBetween(page, minPrice, higherPrice) {
  return fetch(
    `${BASE_URL}pageNumber=${page}&lowerPrice=${minPrice}&upperPrice=${higherPrice}`
  )
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

export function getByTitle(page, title) {
  return fetch(`${BASE_URL}page=${page}&title=${title}`)
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
