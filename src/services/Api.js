export default class Api {
  static base_url = 'https://pro-api.coinmarketcap.com/v1/';
  static api_key = 'b4735d8c-54f8-4a29-837b-7cfae539bcd1';
  static doRequest(url, options) {
    let headers = {
      ['X-CMC_PRO_API_KEY']: Api.api_key,
    };
    if (options) {
      headers = {
        ...headers,
        ...options.headers,
      };
    }
    return fetch(this.base_url + url, {
      ...options,
      headers: headers,
    });
  }
}
