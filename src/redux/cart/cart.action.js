import {CartActionTypes}  from "./cart.actionTypes";

export const cardAddItem=(item)=>({
    type:CartActionTypes.CART_ADD_ITEM,
    payload:item,
});
export const cardRemoveItem=(item)=>({
    type:CartActionTypes.CART_REMOVE_ITEM,
    payload:item,
});