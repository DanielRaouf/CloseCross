import {combineReducers} from 'redux';
import currencies from './currencies-reducer';

const reducers = combineReducers({
  currencies,
});

export default reducers;
