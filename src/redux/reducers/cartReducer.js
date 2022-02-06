import { ActionTypes } from "../constants/action-types";
const cartInitialState = {
    cart: []
}

const orderInitialState = {
    orders: []
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
                            ? { ...product, qty: product?.qty + 1 }
                            : product
                    )
                    : [...state.cart, { ...product, qty: 1 }],
            };

        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== payload.id.id)
            }

        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(product => product._id === payload.id.id ? { ...product, qty: payload.qty } : product)
            }

        case ActionTypes.CLEAR_CART:
            return { cart: [] }
        default:
            return state;
    }
};

export const orderReducer = ((state = orderInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_ORDERS:
            return {
                orders: payload
            }

        default:
            return state;
    }
})
