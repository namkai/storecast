import { createStore } from 'redux';
import rootReducer from '../reducers';
import createEnhancer from './createEnhancer';
// import { StoreState } from '../types';

const configureStore = createStore<any>(rootReducer, {}, createEnhancer());

export default configureStore;
