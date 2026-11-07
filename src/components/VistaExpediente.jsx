import React, { useState } from 'react';

export const VistaExpediente = ({ paciente, onVolver }) => {
  const [pestana, setPestana] = useState('anamnesis');

  return (
    <div className="expediente-container">
      <button className="btn-back" onClick={onVolver}>
        ‹ Volver al seguimiento
      </button>

      {/* TARJETA DEL PACIENTE */}
      <div className="paciente-header-card">
        <div className="paciente-avatar">MR</div>
        <div className="paciente-detalles">
          <h2>
            {paciente?.nombre || 'Mariana Rodríguez'}{' '}
            <span className="badge-consulta">• En consulta</span>
          </h2>
          <p>34 años · Paciente #AD-00182 · Última consulta: 04 jun 2025</p>
        </div>
        <button className="btn-historial">📋 Ver historial</button>
      </div>

      {/* PESTAÑAS */}
      <div className="expediente-tabs">
        <button
          className={`tab-item ${pestana === 'anamnesis' ? 'active' : ''}`}
          onClick={() => setPestana('anamnesis')}
        >
          📄 Anamnesis e historial
        </button>
        <button
          className={`tab-item ${pestana === 'evaluacion' ? 'active' : ''}`}
          onClick={() => setPestana('evaluacion')}
        >
          🩺 Evaluación y diagnóstico
        </button>
        <button
          className={`tab-item ${pestana === 'archivos' ? 'active' : ''}`}
          onClick={() => setPestana('archivos')}
        >
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

            <div className="card-box">
              <h3>Antecedentes médicos y enfermedades crónicas</h3>
              <div className="checkbox-grid">
                <label><input type="checkbox" /> Diabetes</label>
                <label><input type="checkbox" defaultChecked /> Hipertensión</label>
                <label><input type="checkbox" /> Cardiopatías</label>
                <label><input type="checkbox" /> Asma</label>
              </div>
            </div>
          </div>

          <div className="col-der">
            <div className="card-box alerta-box">
              <span className="badge-alerta">ALERTA CLÍNICA</span>
              <h3>Alergias activas</h3>
              <div className="tag-alergia">Penicilina ×</div>
            </div>

            <div className="card-box vitals-box">
              <h3>Signos vitales</h3>
              <div className="vitals-row">
                <div><span>Presión</span><strong>120/80</strong></div>
                <div><span>Peso</span><strong>67 kg</strong></div>
                <div><span>Temperatura</span><strong>36.5°</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: EVALUACIÓN Y ODONTOGRAMA */}
      {pestana === 'evaluacion' && (
        <div className="grid-expediente">
          <div className="col-izq">
            <div className="card-box">
              <h3>Diagnóstico general</h3>
              <p className="texto-box">Caries oclusal activa en pieza 16 y sensibilidad asociada. Restauración en pieza 11 en buen estado.</p>
            </div>

            <div className="card-box">
              <h3>Odontograma</h3>
              <div className="odontograma-simulacion">
                <p className="leyenda">🔴 Caries | 🔵 Resina | ⚪ Extracción</p>
                <div className="dientes-row">
                  {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26].map((diente) => (
                    <div key={diente} className={`diente-item ${diente === 16 ? 'caries' : ''} ${diente === 11 ? 'resina' : ''}`}>
                      <div className="diente-shape"></div>
                      <span>{diente}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-der">
            <div className="card-box">
              <h3>Plan de tratamiento</h3>
              <ul className="plan-lista">
                <li><input type="checkbox" defaultChecked /> Limpieza <span>$600</span></li>
                <li><input type="checkbox" defaultChecked /> Blanqueamiento <span>$2,500</span></li>
                <li><input type="checkbox" /> Resinas <span>$1,000</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 3: ARCHIVOS Y RADIOGRAFÍAS */}
      {pestana === 'archivos' && (
        <div className="archivos-section">
          <div className="dropzone-box">
            <div className="upload-icon">☁</div>
            <p><strong>Arrastra tus archivos aquí o haz clic para explorar</strong></p>
            <span>Radiografías, fotografías clínicas o PDF · Máximo 20 MB</span>
          </div>

          <h3>Archivos del paciente (3 archivos)</h3>
          <div className="archivos-grid">
            <div className="archivo-card">
              <div className="file-icon">🖼</div>
              <div>
                <strong>Radiografía panorámica</strong>
                <p>JPG · 2.4 MB · Hoy</p>
              </div>
            </div>
            <div className="archivo-card">
              <div className="file-icon">🖼</div>
              <div>
                <strong>Radiografía periapical</strong>
                <p>PNG · 1.8 MB · Hoy</p>
              </div>
            </div>
            <div className="archivo-card">
              <div className="file-icon">📄</div>
              <div>
                <strong>Consentimiento informado</strong>
                <p>PDF · 840 KB · Hoy</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACCIONES DEL EXPEDIENTE */}
      <div className="expediente-footer">
        <button className="btn-secundario">Guardar borrador</button>
        <button className="btn-primario">✓ Finalizar consulta</button>
      </div>
    </div>
  );
};

export default VistaExpediente;