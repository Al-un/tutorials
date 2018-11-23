import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// const preloadedState = {};

const store = createStore(rootReducer);

export default store;
