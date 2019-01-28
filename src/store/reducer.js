// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'; // 使用redux-immutable
import { headerState } from './state';
import * as types from './actionTypes';

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT_CHANGE:
      return state.set('inputVal', action.val)
    case types.HANDLE_INPUT_FOCUS:
      return state.set('foucused', true)
    case types.HANDLE_INPUT_BLUR:
      return state.set('foucused', false)
    default:
      return state;
  }
}

const allReducer = {
  headerReducer
}

const rootReducer = combineReducers(allReducer);
export default rootReducer;