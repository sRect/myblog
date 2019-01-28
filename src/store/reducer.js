import { combineReducers } from 'redux';
import { headerState } from './state';
import * as types from './actionTypes';

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT_CHANGE:
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputVal = action.val;
      return { ...newState };
    case types.HANDLE_INPUT_FOCUS:
      let newState2 = JSON.parse(JSON.stringify(state));
      newState2.foucused = true;
      return { ...newState2 }
    case types.HANDLE_INPUT_BLUR:
      let newState3 = JSON.parse(JSON.stringify(state));
      newState3.foucused = false;
      return { ...newState3 }
    default:
      return state;
  }
}

const allReducer = {
  headerReducer
}

const rootReducer = combineReducers(allReducer);
export default rootReducer;