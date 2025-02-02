// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-Reduser'; // This is where you combine your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;

