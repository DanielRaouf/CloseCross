export default class Currency {
  constructor({id, name, symbol, slug, last_updated, tags, quote}) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.slug = slug;
    this.isMineable = tags && tags.includes('mineable');
    const date = new Date(last_updated);
    this.lastUpdated = `${date.toLocaleString()}`;
    this.usdPrice = quote && quote.USD && quote.USD.price;
  }
}
