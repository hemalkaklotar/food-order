import { createStore,applyMiddleware,compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import appReducer from "./appReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer,composeEnhancers(applyMiddleware()));
const persistor=persistStore(store);
export  {store,persistor}


// import { createStore } from 'redux'
// import  countReducer  from './appReducer';
// const store = createStore(countReducer);
// export default store;



// export default configureStore({
//   reducer: {},
// })          