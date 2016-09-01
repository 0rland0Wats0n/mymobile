import { LOGIN } from '../actions/index';

const INITIAL_STATE = { user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN:
      return { ...state, user: action.payload.data }

    default:
      return state;
  }
}
