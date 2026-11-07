import React, { useState } from 'react';

const VistaExpediente = ({ paciente, onVolver }) => {
  const [pestana, setPestana] = useState('evaluacion');
  
  // Estado para el odontograma (inicializado con el diagnóstico de la captura)
  const [estadoDientes, setEstadoDientes] = useState({
    16: 'caries',
    11: 'resina',
    33: 'extraccion'
  });

  // Función para cambiar el estado al hacer clic en un diente
  const handleDienteClick = (diente) => {
    setEstadoDientes(prev => {
      const estadoActual = prev[diente];
      let nuevoEstado;

      // Ciclo de estados: Normal -> Caries -> Resina -> Extracción -> Normal
      if (!estadoActual) nuevoEstado = 'caries';
      else if (estadoActual === 'caries') nuevoEstado = 'resina';
      else if (estadoActual === 'resina') nuevoEstado = 'extraccion';
      else nuevoEstado = null; // Regresa a blanco/sano

      // Si regresa a normal, eliminamos esa pieza del objeto para mantenerlo limpio
      if (!nuevoEstado) {
        const newState = { ...prev };
        delete newState[diente];
        return newState;
      }

      return { ...prev, [diente]: nuevoEstado };
    });
  };

  // Función auxiliar para asignar la clase CSS correcta
  const getClaseDiente = (diente) => {
    const estado = estadoDientes[diente];
    if (estado === 'caries') return 'estado-caries';
    if (estado === 'resina') return 'estado-resina';
    if (estado === 'extraccion') return 'estado-extraccion';
    return '';
  };

  return (
    <div className="expediente-container">
      <button className="btn-back" onClick={onVolver}>
        ‹ Volver a pacientes
      </button>

      <div className="paciente-header-card mt-10">
        <div className="paciente-avatar">MR</div>
        <div className="paciente-detalles">
          <h2>
            {paciente?.nombre || 'Mariana Rodríguez'} <span className="badge-consulta">• En consulta</span>
          </h2>
          <p>34 años · Paciente #{paciente?.id || 'AD-00182'} · Última consulta: 04 jun 2025</p>
        </div>
        <button className="btn-secundario">📋 Ver historial</button>
      </div>

      <div className="expediente-tabs">
        <button className={`tab-item ${pestana === 'anamnesis' ? 'active' : ''}`} onClick={() => setPestana('anamnesis')}>
          📄 Anamnesis e historial
        </button>
        <button className={`tab-item ${pestana === 'evaluacion' ? 'active' : ''}`} onClick={() => setPestana('evaluacion')}>
          🩺 Evaluación y diagnóstico
        </button>
        <button className={`tab-item ${pestana === 'archivos' ? 'active' : ''}`} onClick={() => setPestana('archivos')}>
          📎 Archivos y radiografías
        </button>
      </div>

      {/* PESTAÑA 1: ANAMNESIS */}
      {pestana === 'anamnesis' && (
        <div className="grid-expediente">
          <div className="col-izq">
            <div className="card-box">
              <h3>Motivo principal de consulta</h3>
              <p className="texto-box">Sensibilidad dental y dolor intermitente en molar superior izquierdo.</p>
            </div>
          </div>
          <div className="col-der">
            <div className="card-box alerta-box">
              <span className="badge-alerta">ALERTA CLÍNICA</span>
              <h3>Alergias activas</h3>
              <div className="tag-alergia">Penicilina ×</div>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: EVALUACIÓN Y ODONTOGRAMA INTERACTIVO */}
      {pestana === 'evaluacion' && (
        <div className="grid-expediente">
          <div className="col-izq">
            <div className="card-box mb-20">
              <h3 className="card-title">Diagnóstico general</h3>
              <div className="diagnostico-texto">
                Caries oclusal activa en pieza 16 y sensibilidad asociada. Restauración en pieza 11 en buen estado.
              </div>
            </div>

            <div className="card-box">
              <div className="odontograma-header">
                <div>
                  <h3 className="card-title">Odontograma</h3>
                  <p className="card-subtitle">Selecciona un diente para cambiar su estado clínico.</p>
                </div>
                <div className="odontograma-leyenda">
                  <span className="leyenda-item"><span className="dot caries"></span> Caries</span>
                  <span className="leyenda-item"><span className="dot resina"></span> Resina</span>
                  <span className="leyenda-item"><span className="dot extraccion"></span> Extracción</span>
                </div>
              </div>

              <div className="odontograma-container">
                <div className="dientes-row">
                  {[18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3].map(diente => (
                    <div 
                      key={diente} 
                      className="diente-wrapper" 
                      onClick={() => handleDienteClick(diente)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`diente-shape ${getClaseDiente(diente)}`}></div>
                      <span className="diente-num">{diente}</span>
                    </div>
                  ))}
                </div>
                <div className="dientes-row">
                  {[31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46].map(diente => (
                    <div 
                      key={diente} 
                      className="diente-wrapper" 
                      onClick={() => handleDienteClick(diente)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`diente-shape ${getClaseDiente(diente)}`}></div>
                      <span className="diente-num">{diente}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-der">
            <div className="card-box plan-tratamiento-card">
              <h3 className="card-title">Plan de tratamiento</h3>
              <p className="card-subtitle">Selecciona servicios para generar el presupuesto.</p>
              <div className="plan-lista">
                <label className="plan-item"><input type="checkbox" defaultChecked /><span className="plan-nombre">Limpieza</span><span className="plan-precio">$600</span></label>
                <label className="plan-item"><input type="checkbox" defaultChecked /><span className="plan-nombre">Blanqueamiento</span><span className="plan-precio">$2,500</span></label>
                <label className="plan-item"><input type="checkbox" /><span className="plan-nombre">Resinas</span><span className="plan-precio">$1,000</span></label>
                <label className="plan-item"><input type="checkbox" /><span className="plan-nombre">Endodoncia</span><span className="plan-precio">$3,500</span></label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 3: ARCHIVOS */}
      {pestana === 'archivos' && (
        <div className="archivos-section">
          <div className="dropzone-box">
            <p><strong>Arrastra tus archivos aquí o haz clic para explorar</strong></p>
            <span>Radiografías, fotografías clínicas o PDF · Máximo 20 MB</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VistaExpediente;