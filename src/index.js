// IMPORTACIONES
// Versión de "require" en ES6+

// const React = require('react')
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// RENDER
// JSX -> Un tipo de formato en el cual se vincula JS con HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ANALÍTICAS
reportWebVitals();
