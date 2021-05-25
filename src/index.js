import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </React.StrictMode>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
