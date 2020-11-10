import React from 'react';
import './Cancion.css';
const Cancion = ({ id, title, artista }) => {
  return (
    <div>
      <div className="cancion">
        <div className="number">{id}</div>
        <div className="cancion-info">
          <h2 className="cancion-title">{title}</h2>
          <p className="cancion-artista">{artista}</p>
        </div>
      </div>
    </div>
  );
};

export default Cancion;