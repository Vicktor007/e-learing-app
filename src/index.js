import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RefactoredApp from "./RefactoredApp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefactoredApp/>
  </React.StrictMode>
);
