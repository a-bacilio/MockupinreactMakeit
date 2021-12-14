import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter } from "react-router-dom";
import SEO from './Components/PageComponents/SEO.js';


ReactDOM.render(
  <React.StrictMode>
    <SEO/>
    <BrowserRouter>
      <App />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

