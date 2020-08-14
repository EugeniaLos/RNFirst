import { combineReducers } from 'redux';

import { ADD_NEW_CAT, CHANGE_VISIBLE_CATS, SHOW_ALL_CATS } from '../constants/actionTypes';
import { cats } from '../data/cats';

const INITIAL_STATE = {
  all: cats,
  visible: cats,
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALL_CATS:
      return { ...state, visible: cats };
    case CHANGE_VISIBLE_CATS:
      return { ...state, visible: action.payload };
    case ADD_NEW_CAT:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  cats: catReducer,
});
