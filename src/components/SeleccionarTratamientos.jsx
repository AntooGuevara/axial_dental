import React, { useState } from 'react';
import './styles/modal.css';
import logo from './images/logo_sin_fondo.png';

export const SeleccionarTratamientos = ({ serviciosDisponibles, categoriaTitulo, cerrar }) => {

  const [seleccionados, setSeleccionados] = useState([]);

  // Cambiar estado de selección (si/no) yes/no si o no que si si o no pendejo SI O NO SI O NO
  const toggleServicio = (nombre) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter((item) => item !== nombre));
    } else {
      setSeleccionados([...seleccionados, nombre]);
    }
  };

  return (
    <div className="modal-fondo">
      <div className="modal">
        {/* Encabezado */}
        <div className="modal-header">
          <div className="modal-icono">
            <img src={logo} alt="modal-icono" />
          </div>

          <div className="modal-titulo">
            <h2>Selecciona tus tratamientos</h2>
            <p>{categoriaTitulo} — Selecciona los servicios para tu cita</p>
          </div>

          <button className="modal-cerrar" onClick={cerrar}>
            ×
          </button>
        </div>

        {/* Lista de selección interactiva */}
        <div className="paquetes">
          {serviciosDisponibles.map((servicio) => {
            const estaSeleccionado = seleccionados.includes(servicio.nombre);

            return (
              <div
                key={servicio.nombre}
                className={`paquete ${estaSeleccionado ? 'paquete-seleccionado' : ''}`}
                onClick={() => toggleServicio(servicio.nombre)}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
              >
                <div className="check">
                  <input
                    type="checkbox"
                    checked={estaSeleccionado}
                    readOnly
                    style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                  />
                </div>

                <div className="paquete-info">
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                </div>

                <span className="precio">{servicio.precio}</span>
              </div>
            );
          })}
        </div>

        {/* footer del modal con botón dinámico */}
        <div className="modal-footer">
          <button className="boton-cita">
            {seleccionados.length > 0
              ? `Agendar ${seleccionados.length} servicio(s) seleccionado(s)`
              : 'Selecciona al menos un tratamiento'}
          </button>

          <p>
            O llama al <u>+52 618 --- ----</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeleccionarTratamientos;