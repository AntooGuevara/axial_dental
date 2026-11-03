import React, { useState } from 'react';
import './styles/admin.css';
import { serviciosData } from './data/serviciosData.js';

export const AdminServicios = () => {
  // filtros
  const [categoriaActiva, setCategoriaActiva] = useState('prevencion');
  
  // estado local para simular la vista previa de edición
  const [modalFormulario, setModalFormulario] = useState(false);
  const [servicioAEditar, setServicioAEditar] = useState(null);

  const datosCategoria = serviciosData[categoriaActiva];

  const handleAbrirCrear = () => {
    setServicioAEditar(null);
    setModalFormulario(true);
  };

  const handleAbrirEditar = (servicio) => {
    setServicioAEditar(servicio);
    setModalFormulario(true);
  };

  return (
    <div className="admin-container">
      
      <aside className="admin-sidebar">
        <h2>Axial Dental</h2>
        <p className="admin-rol">Panel Administrador</p>
        <nav className="admin-nav">
          <button className="nav-item active">Gestión de Servicios</button>
          <button className="nav-item">Citas Registradas</button>
          <button className="nav-item">Horarios</button>
        </nav>
      </aside>

      {/* lo principal */}
      <main className="admin-content">
        <header className="admin-header">
          <div>
            <h1>Catálogo de Servicios y Precios</h1>
            <p>Administra las tarifas y descripciones visibles en la página web</p>
          </div>
          <button className="btn-nuevo" onClick={handleAbrirCrear}>
            + Agregar Servicio
          </button>
        </header>

        {/*   categorías */}
        <div className="tabs-categorias">
          {Object.entries(serviciosData).map(([clave, cat]) => (
            <button
              key={clave}
              className={`tab-btn ${categoriaActiva === clave ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(clave)}
            >
              {cat.titulo}
            </button>
          ))}
        </div>

        {/*  Servicios */}
        <div className="tabla-contenedor">
          <table className="tabla-servicios">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Descripción</th>
                <th>Precio Actual</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datosCategoria.servicios.map((serv, index) => (
                <tr key={index}>
                  <td className="col-nombre">{serv.nombre}</td>
                  <td className="col-desc">{serv.descripcion}</td>
                  <td className="col-precio">{serv.precio}</td>
                  <td className="col-acciones">
                    <button className="btn-accion edit" onClick={() => handleAbrirEditar(serv)}>
                      Editar
                    </button>
                    <button className="btn-accion delete">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/*  Agregar/Editar */}
      {modalFormulario && (
        <div className="modal-fondo">
          <div className="modal-admin">
            <h3>{servicioAEditar ? 'Editar Servicio' : 'Nuevo Servicio'}</h3>
            
            <div className="form-group">
              <label>Nombre del servicio</label>
              <input type="text" defaultValue={servicioAEditar ? servicioAEditar.nombre : ''} placeholder="Ej. Limpieza Ultrasónica" />
            </div>

            <div className="form-group">
              <label>Precio</label>
              <input type="text" defaultValue={servicioAEditar ? servicioAEditar.precio : ''} placeholder="Ej. $800" />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea defaultValue={servicioAEditar ? servicioAEditar.descripcion : ''} rows="3" placeholder="Detalle del tratamiento..."></textarea>
            </div>

            <div className="modal-admin-actions">
              <button className="btn-cancelar" onClick={() => setModalFormulario(false)}>Cancelar</button>
              <button className="btn-guardar" onClick={() => setModalFormulario(false)}>Guardar Cambios</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServicios;