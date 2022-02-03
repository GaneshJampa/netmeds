import {combineReducers} from 'redux';
import { productsReducer, selectedProductReducer, categoriesReducer } from './productsReducer';
import AuthReducer from "./authsReducer";
import { cartReducer } from './cartReducer';

const reducers = combineReducers ({
    allProducts: productsReducer,
    product: selectedProductReducer,
    allCategories: categoriesReducer,
    auth: AuthReducer,
    cart: cartReducer
});

export default reducers;