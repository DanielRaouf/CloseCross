import * as types from './utils/Consts';

export function fetchCurrencies(nextItemIndex = 1) {
  return {type: types.FETCH_CURRENCIES, nextItemIndex};
}
