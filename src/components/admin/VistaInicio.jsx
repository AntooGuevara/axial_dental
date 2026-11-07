import React from 'react';

const VistaInicio = ({ onAbrir }) => {
  return (
    <div className="vista-inicio">
      <div className="cards-resumen-row">
        <div className="card-kpi dark">
          <p>Resumen de hoy</p>
          <h2>8 <span>citas programadas</span></h2>
        </div>
        <div className="card-kpi"><p>En espera</p><h2>2</h2></div>
        <div className="card-kpi"><p>En consulta</p><h2>1</h2></div>
        <div className="card-kpi"><p>Atendidos</p><h2>4</h2></div>
      </div>

      <div className="card-box mt-20">
        <h3>Seguimiento de pacientes en consulta</h3>
        <table className="tabla-dashboard">
          <thead>
            <tr><th>HORA</th><th>PACIENTE</th><th>SERVICIO / MOTIVO</th><th>ESTADO</th><th>ACCIONES</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>09:00</td>
              <td><strong>Mariana Rodríguez</strong><br/><small>ID AD-00182</small></td>
              <td>Limpieza dental</td>
              <td><span className="badge-consulta">• En consulta</span></td>
              <td>
                <button className="btn-accion-blue" onClick={() => onAbrir('Mariana Rodríguez', 'AD-00182')}>Abrir expediente</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VistaInicio;