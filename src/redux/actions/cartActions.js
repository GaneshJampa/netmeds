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

  export const clearCart = () => {
    return {
      type: ActionTypes.CLEAR_CART,
    };
  };

  export const showOrders = (orders) => {
    return {
      type: ActionTypes.SHOW_ORDERS,
      payload: orders
    }
  }

  export const clearOrders = () => {
    return {
      type: ActionTypes.CLEAR_ORDERS,
    };
  };