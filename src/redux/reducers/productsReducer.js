import { ActionTypes } from "../constants/action-types";
const productsintialState = {
  products: []
};
const categoriesintialState = {
  categories: []
};
const cartInitialState = {
  cart: []
}


export const productsReducer = (state = productsintialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const categoriesReducer = (state = categoriesintialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.REMOVE_SELECTED_CATEGORY:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = cartInitialState, { type, payload }) => {
  switch (type) {
      case ActionTypes.ADD_TO_CART:

      console.log(productsReducer.state)
          const product = state.allProducts?.products.find(prod => prod._id === payload.id)

          const inCart = state.cart.find((product) =>
             product._id === payload.id ? true : false
          )
          return {
              ...state,
              cart: inCart
                ? state.cart.map((product) =>
                product._id === payload.id
                  ? { ...product, qty: product.qty + 1}
                  : product
                )
              : [ ...state.cart, { ...product, qty: 1}],
          };
      case ActionTypes.REMOVE_FROM_CART:
          return {
              ...state,
              cart: state.cart.filter((product) => product._id !== payload.id)
          }
      case ActionTypes.ADJUST_QTY:
          return {
              ...state,
              cart: state.cart.map(product => product._id === payload.id ? { ...product, qty: payload.qty} : product)
          }
      case ActionTypes.SHOW_CART:
          return {

          }
      default:
          return state;
  }
};
