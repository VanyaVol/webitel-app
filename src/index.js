import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import '@fontsource/montserrat/500.css';

import App from './App';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
  </React.StrictMode>
);