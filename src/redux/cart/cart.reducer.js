import { CartActionTypes } from "./cart.actionTypes";

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemsToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}