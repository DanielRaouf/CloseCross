import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../utils/Consts';
import CurrenciesService from '../services/CurrenciesService';
import Currency from '../models/Currency';

function* requestCurrencies({nextItemIndex}) {
  try {
    let data = yield call(CurrenciesService.getCurrencies, nextItemIndex);
    data = data.data.map(currency => new Currency(currency));
    yield put({type: types.FETCH_CURRENCIES_SUCCESS, data, nextItemIndex});
  } catch (error) {
    console.log(error);
    yield put({type: types.FETCH_CURRENCIES_FAIL, error});
  }
}

export default function* currenciesSagas() {
  yield takeLatest(types.FETCH_CURRENCIES, requestCurrencies);
}
