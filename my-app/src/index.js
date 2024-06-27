import React from 'react';
import ReactDOM from 'react-dom/client'; // Note le changement ici
import App from './App';
import './index.css'; // Importation des styles globaux
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap

// Création de la racine avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisation de root.render pour rendre l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
