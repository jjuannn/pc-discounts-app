import offerMapper from "../mapper/offer";
const BASE_URL = "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&";

export function getPage(page) {
  return fetch(`${BASE_URL}pageNumber=${page}`)
    .then((r) =>
      !r.ok ? new Error(`Cannot get page nº${page}. Try again! :(`) : r
    )
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse.map((offer) => {
        return offerMapper(offer);
      });
    });
}

export function getByPriceBetween(page, minPrice, higherPrice) {
  return fetch(
    `${BASE_URL}pageNumber=${page}&lowerPrice=${minPrice}&upperPrice=${higherPrice}`
  )
    .then((r) =>
      !r.ok ? new Error(`Cannot get results for you filters. Try again! :(`) : r
    )
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse.map((offer) => {
        return offerMapper(offer);
      });
    });
}

export function getByTitle(title) {
  return fetch(`${BASE_URL}title=${title}`)
    .then((r) =>
      !r.ok ? new Error(`Cannot get results for '${title}'. Try again! :(`) : r
    )
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse.map((offer) => {
        return offerMapper(offer);
      });
    });
}
