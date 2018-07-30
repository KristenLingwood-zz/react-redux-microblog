import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

//create redux store and enable chrome dev tools extension ability
const store = createStore(
  rootReducer,
  compose(
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

//wrap app component with provider component to enable connection to Redux store
ReactDOM.render(
  //store is a prop of provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
