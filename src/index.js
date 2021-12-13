import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

