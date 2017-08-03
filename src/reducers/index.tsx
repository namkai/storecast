import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authentication from './authentication_reducer';

const rootReducer = combineReducers({
  form,
  authentication,
});

export default rootReducer;