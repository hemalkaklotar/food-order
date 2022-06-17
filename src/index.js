import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './redux/store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import {persistor,store} from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// https://www.codementor.io/@rajjeet/step-by-step-how-to-add-redux-to-a-react-app-11tcgslmvi