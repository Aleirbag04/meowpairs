import './style.css';

// import ReactDOM from 'react-dom'; //Changes on React 18
import React from 'react';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('react-container'));

const rootElement = document.getElementById("react-container");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);