import { combineReducers, configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import shops from './reducers/shops';
import requisitions from './reducers/requisitions';

const rootReducer = combineReducers({ products, shops, requisitions });
const store = configureStore({ reducer: rootReducer });

export default store;
