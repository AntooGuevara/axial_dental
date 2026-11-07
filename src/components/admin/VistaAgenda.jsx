import React from 'react';

const VistaAgenda = ({ onAbrir }) => {
  return (
    <div className="card-box">
      <h3>Agenda del día</h3>
      <p>Miércoles, 18 de junio · 8 citas programadas</p>
      <div className="lista-citas mt-20">
        <div className="item-cita">
          <div className="hora-col"><strong>09:00</strong><br/><small>45 min</small></div>
          <div className="info-col">
            <strong>Mariana Rodríguez</strong> (34 años)<br/>
            <span>Limpieza dental · Consulta de seguimiento</span>
          </div>
          <div><span className="badge-consulta">• En consulta</span></div>
          <button className="btn-accion-blue" onClick={() => onAbrir('Mariana Rodríguez', 'AD-00182')}>
            Abrir expediente
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaAgenda;