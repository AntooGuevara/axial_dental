import React, { useState } from 'react';
import logo from '../images/logo_sin_fondo.png';

const ModalNuevoPaciente = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    fecha_nacimiento: '',
    sexo: '',
    telefono: '',
    whatsapp: '',
    email: '',
    domicilio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paciente listo para Supabase:', formData);
    alert('¡Paciente registrado con éxito!');
    onClose();
  };

  return (
    <div className="modal-admin-overlay">
      <div className="modal-admin-content">
        
        {/* ENCABEZADO DEL MODAL */}
        <div className="modal-admin-header">
          <div className="modal-admin-logo">
            <img src={logo} alt="Axial Dental" />
          </div>
          <div className="modal-admin-title">
            <h2>Registro de Paciente</h2>
            <p>Ingresa los datos personales para crear un nuevo expediente</p>
          </div>
          <button className="modal-admin-close" onClick={onClose}>×</button>
        </div>

        {/* CUERPO DEL FORMULARIO */}
        <form onSubmit={handleSubmit} className="modal-admin-form">
          <div className="form-group-admin">
            <label>Nombre completo *</label>
            <input type="text" name="nombre_completo" placeholder="Ej. Maria Elena" required onChange={handleChange} />
          </div>

          <div className="form-flex-admin">
            <div className="form-group-admin">
              <label>Fecha de nacimiento *</label>
              <input type="date" name="fecha_nacimiento" required onChange={handleChange} />
            </div>
            <div className="form-group-admin">
              <label>Sexo *</label>
              <select name="sexo" required onChange={handleChange}>
                <option value="">Selecciona...</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-flex-admin">
            <div className="form-group-admin">
              <label>Teléfono de contacto *</label>
              <input type="tel" name="telefono" placeholder="Ej. 6181234567" required onChange={handleChange} />
            </div>
            <div className="form-group-admin">
              <label>WhatsApp</label>
              <input type="tel" name="whatsapp" placeholder="Ej. 6181234567" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group-admin">
            <label>Correo electrónico</label>
            <input type="email" name="email" placeholder="ejemplo@correo.com" onChange={handleChange} />
          </div>

          <div className="form-group-admin">
            <label>Domicilio</label>
            <input type="text" name="domicilio" placeholder="Calle, Número, Colonia" onChange={handleChange} />
          </div>

          <div className="modal-admin-footer">
            <button type="submit" className="btn-confirmar-registro">
              Confirmar y enviar registro
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ModalNuevoPaciente;