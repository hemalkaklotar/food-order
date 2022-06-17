import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:"food-shop",
    storage,
    whitelist:["cart"]
};

const appReducer = combineReducers({
    
})

export default persistReducer(persistConfig,appReducer);


// const countReducer = function(state=0,action){
//     switch (action.type){
//         case "Incremnt":
//             return state+1;
//         case "Decrement":
//             return state-1;
//         default:
//             return state;
//     }
// };

// export default countReducer;