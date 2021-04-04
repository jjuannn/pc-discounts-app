import Offer from "../entity/offer";

export default function offerMapper(offer) {
  const {
    dealID,
    normalPrice,
    salePrice,
    savings,
    steamRatingText,
    steamRatingPercent,
    thumb,
    title,
  } = offer;

  return new Offer({
    dealID,
    normalPrice,
    salePrice,
    savings,
    steamRatingText,
    steamRatingPercent,
    thumb,
    title,
  });
}
