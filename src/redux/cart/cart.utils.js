import { cardAddItem } from "./cart.action";

export const addItemsToCart=(cartItems,cardAddItem)=>{
    const existingCartItem = cartItems.find(
        (cartItems)=>cartItems.id === cardAddItem.id
    );
    if(existingCartItem){
        return 
    }
}
export const addRemoveToCart=(cartItems,cardAddItem)=>{
    
}