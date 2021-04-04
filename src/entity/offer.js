export default class Offer {
  constructor({
    dealID,
    normalPrice,
    salePrice,
    savings,
    steamRatingText,
    steamRatingPercent,
    thumb,
    title,
  }) {
    this.dealID = dealID;
    this.normalPrice = normalPrice;
    this.salePrice = salePrice;
    this.savings = savings;
    this.steamRatingText = steamRatingText;
    this.steamRatingPercent = steamRatingPercent;
    this.thumb = thumb;
    this.title = title;
  }
}
