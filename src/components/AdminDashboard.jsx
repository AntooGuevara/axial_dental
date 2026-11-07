import React, { useState } from 'react';
import './styles/adminDashboard.css';
import logo from './images/logo_sin_fondo.png';
import ModalNuevoPaciente from './admin/ModalNuevoPaciente.jsx';

// Importamos los submódulos
import VistaInicio from './admin/VistaInicio.jsx';
import VistaAgenda from './admin/VistaAgenda.jsx';
import VistaPacientes from './admin/VistaPacientes.jsx';
import VistaServicios from './admin/VistaServicios.jsx';
import VistaConfiguracion from './admin/VistaConfiguracion.jsx';
import VistaExpediente from './admin/VistaExpediente.jsx';

export const AdminDashboard = ({ alVolverSitio }) => {  
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [mostrarModalPaciente, setMostrarModalPaciente] = useState(false);

  const handleAbrirExpediente = (nombre, id) => {
    setPacienteSeleccionado({ nombre, id });
    setSeccionActiva('expediente');
  };

  // Nombres dinámicos para la barra superior
  const titulos = {
    inicio: 'Panel de control',
    agenda: 'Agenda de citas',
    pacientes: 'Pacientes y expedientes',
    servicios: 'Servicios y precios',
    configuracion: 'Configuración',
    expediente: 'Expediente clínico'
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR LATERAL */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="Axial Dental" className="sidebar-logo" />
          <div>
            <h2>Axial Dental</h2>
            <p>CLÍNICA INTEGRAL</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <span className="nav-categoria">GESTIÓN CLÍNICA</span>
          <button className={`nav-link ${seccionActiva === 'inicio' ? 'active' : ''}`} onClick={() => setSeccionActiva('inicio')}>
            <span className="icon">⊞</span> Inicio
          </button>
          <button className={`nav-link ${seccionActiva === 'agenda' ? 'active' : ''}`} onClick={() => setSeccionActiva('agenda')}>
            <span className="icon">📅</span> Agenda de citas
          </button>
          <button className={`nav-link ${seccionActiva === 'pacientes' || seccionActiva === 'expediente' ? 'active' : ''}`} onClick={() => setSeccionActiva('pacientes')}>
            <span className="icon">👤</span> Pacientes y expedientes
          </button>
          <button className={`nav-link ${seccionActiva === 'servicios' ? 'active' : ''}`} onClick={() => setSeccionActiva('servicios')}>
            <span className="icon">💲</span> Servicios y precios
          </button>

          <span className="nav-categoria">SISTEMA</span>
          <button className={`nav-link ${seccionActiva === 'configuracion' ? 'active' : ''}`} onClick={() => setSeccionActiva('configuracion')}>
            <span className="icon">⚙</span> Configuración
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-volver-sitio" onClick={alVolverSitio}>
            <span>←</span> Volver al sitio
          </button>
          <div className="perfil-usuario">
            <div className="avatar">DR</div>
            <div className="perfil-info">
              <p className="nombre">Dr. Ricardo Álvarez</p>
              <p className="rol">Cirujano dentista</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-fecha">
            <p>Miércoles, 18 de junio</p>
            <h1>{titulos[seccionActiva]}</h1>
          </div>
          <div className="topbar-acciones">
            <button className="btn-notificacion">🔔</button>
            <button className="btn-nuevo-paciente" onClick={() => setMostrarModalPaciente(true)}>
              + Nuevo paciente
            </button>
          </div>
        </header>

        <div className="admin-body">
          {/* Aquí inyectamos los módulos limpios */}
          {seccionActiva === 'inicio' && <VistaInicio onAbrir={handleAbrirExpediente} />}
          {seccionActiva === 'agenda' && <VistaAgenda onAbrir={handleAbrirExpediente} />}
          {seccionActiva === 'pacientes' && <VistaPacientes onAbrir={handleAbrirExpediente} />}
          {seccionActiva === 'servicios' && <VistaServicios />}
          {seccionActiva === 'configuracion' && <VistaConfiguracion />}
          
          {/* Se corrigió el cierre del paréntesis de VistaExpediente */}
          {seccionActiva === 'expediente' && (
            <VistaExpediente paciente={pacienteSeleccionado} onVolver={() => setSeccionActiva('pacientes')} />
          )}
        </div>
      </main>

      {/* RENDERIZADO DEL MODAL: Se movió fuera del <main> */}
      {mostrarModalPaciente && (
        <ModalNuevoPaciente onClose={() => setMostrarModalPaciente(false)} />
      )}
    </div>
  );
};

export default AdminDashboard;