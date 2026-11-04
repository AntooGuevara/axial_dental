import React, { useState } from 'react';
import './styles/modal.css';
import logo from './images/logo_sin_fondo.png';

export const SeleccionarTratamientos = ({ serviciosDisponibles, categoriaTitulo, cerrar }) => {
  const [seleccionados, setSeleccionados] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Estado mapeado exacto con la tabla "pacientes" de Supabase
  const [formData, setFormData] = useState({
    nombre_completo: '',
    fecha_nacimiento: '',
    telefono: '',
    whatsapp: '',
    email: '',
    sexo: '',
    domicilio: ''
  });

  const toggleServicio = (nombre) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter((item) => item !== nombre));
    } else {
      setSeleccionados([...seleccionados, nombre]);
    }
  };

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirmarCita = (e) => {
    e.preventDefault();
    console.log('Objeto listo para Supabase:', {
      tratamientos: seleccionados,
      paciente: formData
    });
    alert('¡Datos de paciente y cita maquetados con éxito!');
    cerrar();
  };

  return (
    <div className="modal-fondo">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-icono">
            <img src={logo} alt="modal-icono" />
          </div>

          <div className="modal-titulo">
            <h2>{mostrarFormulario ? 'Registro de Paciente' : 'Selecciona tus tratamientos'}</h2>
            <p>
              {mostrarFormulario
                ? 'Ingresa tus datos personales para completar tu expediente y cita'
                : `${categoriaTitulo} — Selecciona los servicios para tu cita`}
            </p>
          </div>

          <button className="modal-cerrar" onClick={cerrar}>
            ×
          </button>
        </div>

        {!mostrarFormulario ? (
          /* PASO 1: Selección de tratamientos */
          <>
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

            <div className="modal-footer">
              <button
                className="boton-cita"
                onClick={() => setMostrarFormulario(true)}
                disabled={seleccionados.length === 0}
                style={{
                  opacity: seleccionados.length === 0 ? 0.6 : 1,
                  cursor: seleccionados.length === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                {seleccionados.length > 0
                  ? `Agendar ${seleccionados.length} servicio(s) seleccionado(s)`
                  : 'Selecciona al menos un tratamiento'}
              </button>

              <p>
                O llama al <u>+52 618 --- ----</u>
              </p>
            </div>
          </>
        ) : (
          /* PASO 2: Formulario mapeado con la BD */
          <form onSubmit={handleConfirmarCita}>
            <div className="paquetes">
              <div className="resumen-seleccion">
                <p><strong>Tratamientos seleccionados:</strong> {seleccionados.join(', ')}</p>
              </div>

              {/* nombre_completo */}
              <div className="form-grupo">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre_completo"
                  placeholder="Ej. Maria Elena"
                  value={formData.nombre_completo}
                  onChange={handleChangeInput}
                  required
                />
              </div>

              {/* fecha_nacimiento y sexo */}
              <div className="form-flex">
                <div className="form-grupo">
                  <label>Fecha de nacimiento *</label>
                  <input
                    type="date"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChangeInput}
                    required
                  />
                </div>

                <div className="form-grupo">
                  <label>Sexo *</label>
                  <select
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChangeInput}
                    required
                    className="form-select"
                  >
                    <option value="">Selecciona...</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* telefono y whatsapp */}
              <div className="form-flex">
                <div className="form-grupo">
                  <label>Teléfono de contacto *</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Ej. 6181234567"
                    value={formData.telefono}
                    onChange={handleChangeInput}
                    required
                  />
                </div>

                <div className="form-grupo">
                  <label>WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="Ej. 6181234567"
                    value={formData.whatsapp}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>

              {/* email */}
              <div className="form-grupo">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={handleChangeInput}
                />
              </div>

              {/* domicilio */}
              <div className="form-grupo">
                <label>Domicilio</label>
                <input
                  type="text"
                  name="domicilio"
                  placeholder="Calle, Número, Colonia"
                  value={formData.domicilio}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="boton-cita">
                Confirmar y enviar registro
              </button>

              <button
                type="button"
                className="btn-volver-seleccion"
                onClick={() => setMostrarFormulario(false)}
              >
                ← Cambiar tratamientos elegidos
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SeleccionarTratamientos;