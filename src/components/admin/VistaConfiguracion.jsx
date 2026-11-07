import React from 'react';

const VistaConfiguracion = () => {
  return (
    <div className="card-box max-w-600">
      <h3>Configuración de la clínica</h3>
      <p>Información visible en documentos, recetas y comunicaciones.</p>

      <form className="form-config mt-20" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Nombre de la clínica</label>
          <input type="text" defaultValue="Axial Dental" />
        </div>
        <div className="form-group">
          <label>Doctor responsable</label>
          <input type="text" defaultValue="Dr. Ricardo Álvarez" />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" defaultValue="+52 55 4820 1902" />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input type="email" defaultValue="contacto@axialdental.mx" />
        </div>
        <button type="submit" className="btn-nuevo-paciente mt-10">Guardar configuración</button>
      </form>
    </div>
  );
};

export default VistaConfiguracion;