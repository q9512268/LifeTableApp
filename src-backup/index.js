// TODO what is the difference between this file and App.js (2020-11-16)


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// TODO what is React.StrictMode (2020-11-16)
// TODO explain this syntax to me (2020-11-16)
// TODO what is happening here (2020-11-16)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: yes do this (2020-11-16)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
