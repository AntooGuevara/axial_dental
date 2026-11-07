import React from 'react';

const VistaPacientes = ({ onAbrir }) => {
  return (
    <div className="card-box">
      <div className="header-flex">
        <h3>Directorio de pacientes</h3>
        <input type="text" placeholder="🔍 Buscar por nombre o teléfono" className="input-search" />
      </div>
      <table className="tabla-dashboard mt-20">
        <thead>
          <tr><th>PACIENTE</th><th>TELÉFONO</th><th>ÚLTIMA CONSULTA</th><th>PRÓXIMA CITA</th><th>ACCIONES</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mariana Rodríguez</strong><br/><small>ID AD-00182</small></td>
            <td>55 4820 1902</td>
            <td>4 jun 2025</td>
            <td>18 jun · 09:00</td>
            <td>
              <button className="btn-secundario" onClick={() => onAbrir('Mariana Rodríguez', 'AD-00182')}>Ver expediente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VistaPacientes;