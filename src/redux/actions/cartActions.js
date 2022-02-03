import { ActionTypes } from "../constants/action-types";

export const addtoCart = (productID) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: {
        id: productID
      }
    };
  };

  export const removeFromCart = (productID) => {
    return {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: {
        id: productID
      }
    };
  };

  export const adjustQty = (productID, value) => {
    return {
      type: ActionTypes.ADJUST_QTY,
      payload: {
        id: productID,
        qty: value
      }
    }

  }

  export const showCart = (cart) => {
    return {
      type: ActionTypes.SHOW_CART,
      payload: cart,
    };
  };
