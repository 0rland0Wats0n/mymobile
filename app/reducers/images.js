import { GET_IMAGES, GET_IMAGE } from '../actions/index';

const INITIAL_STATE = { all: [], image: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_IMAGES:
      return { ...state, all: action.payload.data };

    case GET_IMAGE:
      return { ...state, image: action.payload.data };

    default:
      return state;
  }
}
