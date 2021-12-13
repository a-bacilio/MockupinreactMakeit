import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import GlobalStyle from './GlobalStyle.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);

