import { ActionTypes } from "../constants/action-types";
const cartInitialState = {
    cart: []
}

export const cartReducer = (state = cartInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:

        console.log(payload.id.products?.find(prod => prod._id === payload.id.id))
            const product = payload.id.products?.find(prod => prod._id === payload.id.id)

            const inCart = state.cart?.find((product) =>
               product._id === payload.id.id ? true : false
            )

            console.log(inCart)
            return {
                ...state,
                cart: inCart
                  ? state?.cart.map((product) =>
                  product._id === payload.id.id
                    ? { ...product, qty: product?.qty + 1}
                    : product
                  )
                : [ ...state.cart, { ...product, qty: 1}],
            };

        case ActionTypes.REMOVE_FROM_CART:
            const prod = payload.id.products?.find(prod => prod._id === payload.id.id)
            console.log(prod)
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== payload.id.id)
            }

        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(product => product._id === payload.id.id ? { ...product, qty: payload.qty} : product)
            }

        case ActionTypes.SHOW_CART:
            return {

            }
        default:
            return state;
    }
};
