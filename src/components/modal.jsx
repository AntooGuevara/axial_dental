import React from 'react';
import './styles/modal.css';
import logo from './images/logo_sin_fondo.png';
import { serviciosData } from './data/serviciosData.js'; 

const Modal = ({ tipo, cerrar }) => {
  const contenido = serviciosData[tipo];

  if (!contenido) return null;

  return (
    <div className="modal-fondo">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-icono">
            <img src={logo} alt="modal-icono" />
          </div>

          <div className="modal-titulo">
            <h2>{contenido.titulo}</h2>
            <p>{contenido.servicios.length} tratamientos disponibles</p>
          </div>

          <button className="modal-cerrar" onClick={cerrar}>
            ×
          </button>
        </div>

        <div className="paquetes">
          {contenido.servicios.map((servicio) => (
            <div className="paquete" key={servicio.nombre}>
              <div className="check">✓</div>

              <div className="paquete-info">
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
              </div>

              {/* El precio ahora viene directamente de la fuente de datos */}
              <span className="precio">{servicio.precio}</span>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="boton-cita">Agendar cita ahora</button>
          <p>O llama al <u>+52 618 --- ----</u></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;