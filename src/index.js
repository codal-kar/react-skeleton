import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/common.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configStore from "./redux/store/configStore";
const store = configStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
