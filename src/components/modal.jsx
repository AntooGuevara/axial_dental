import React, { useState } from 'react'; 
import './styles/modal.css';
import logo from './images/logo_sin_fondo.png';
import { serviciosData } from './data/serviciosData.js'; 
import { SeleccionarTratamientos } from './SeleccionarTratamientos.jsx';

const Modal = ({ tipo, cerrar }) => {
  // Estado para alternar la vista
  const [modoSeleccion, setModoSeleccion] = useState(false);

  const contenido = serviciosData[tipo];

  if (!contenido) return null;

  // Si se presiona el botón se muestra el componente
  //para eso hice lo del data
  
  if (modoSeleccion) {
    return (
      <SeleccionarTratamientos
        serviciosDisponibles={contenido.servicios}
        categoriaTitulo={contenido.titulo}
        cerrar={cerrar}
      />
    );
  }

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

              <span className="precio">{servicio.precio}</span>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          {/* Al hacer clic aqui, cambia el estado a true y deja seleccionar cosas */}
          <button 
            className="boton-cita" 
            onClick={() => setModoSeleccion(true)}
          >
            Agendar cita ahora
          </button>
          
          <p>O llama al <u>+52 618 --- ----</u></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;