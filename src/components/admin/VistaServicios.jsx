import React from 'react';
import { serviciosData } from '../data/serviciosData.js'; 

const VistaServicios = () => {
  return (
    <div>
      <div className="header-flex mb-20">
        <div>
          <h3>Catálogo de servicios</h3>
          <p>Administra los tratamientos y precios de la clínica.</p>
        </div>
        <button className="btn-nuevo-paciente">+ Agregar servicio</button>
      </div>

      <div className="grid-servicios-cards">
        {Object.values(serviciosData).flatMap(cat => cat.servicios).map((serv, i) => (
          <div className="card-servicio-item" key={i}>
            <div className="icon-blue">⚡</div>
            <h4>{serv.nombre}</h4>
            <p>{serv.descripcion}</p>
            <div className="precio-row">
              <span>PRECIO</span>
              <strong>{serv.precio}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaServicios;