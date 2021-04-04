const BASE_URL = "https://www.cheapshark.com/api/1.0/deals?id=";

export default function getOfferById(id) {
  return fetch(`${BASE_URL}${id}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}
