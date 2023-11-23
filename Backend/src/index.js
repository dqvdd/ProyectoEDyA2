// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Asegúrate de tener un archivo index.css en tu carpeta src
import Home from './pages/Home'; // Importa tu componente Home

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
