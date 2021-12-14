import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,500;0,600;1,500;1,600&family=Metrophobic&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
    </Helmet>
    <BrowserRouter>
      <App />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

