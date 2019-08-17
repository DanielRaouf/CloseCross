import {fork, all} from 'redux-saga/effects';

import currenciesSagas from './currencies-sagas';

function* rootSaga() {
  yield all([fork(currenciesSagas)]);
}

export default rootSaga;
