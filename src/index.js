import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/Home';
import {ConfigGlobal} from './styles/styleGlobal'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ConfigGlobal/>
  </React.StrictMode>
);


