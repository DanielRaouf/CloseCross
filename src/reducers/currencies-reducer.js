import * as types from '../utils/Consts';

let CURRENCIES_INITIAL_STATE = {
  list: [],
  hasNext: true,
  isLoading: false,
};

function currencies(state = CURRENCIES_INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_CURRENCIES:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_CURRENCIES_SUCCESS:
      const previousIds = state.list.map(item => item.id);
      let items = action.data.filter(item => !previousIds.includes(item.id));
      let list = state.list;
      list = list.concat(items);
      return {
        ...state,
        isLoading: false,
        hasNext: action.data.length > 0,
        list,
      };
    case types.FETCH_CURRENCIES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default currencies;
