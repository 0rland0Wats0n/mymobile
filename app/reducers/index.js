import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ImagesReducer from './images';
import LoginReducer from './login';

const rootReducer = combineReducers({
  images: ImagesReducer,
  login: LoginReducer,
  form: formReducer
});

export default rootReducer;
