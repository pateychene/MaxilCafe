import React from 'react';
import './loader.css'; // Importer les styles du loader

function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
