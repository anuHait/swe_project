import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalContextProvider } from './context/GlobalContext';
import {BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </GlobalContextProvider>
);

