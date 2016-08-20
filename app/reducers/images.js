import { GET_IMAGES } from '../actions/index';

const INITIAL_STATE = { all: [], image: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_IMAGES:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}
