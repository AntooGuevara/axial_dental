// src/serviciosData.js

export const serviciosData = {
  prevencion: {
    titulo: 'Salud y prevención',
    descripcion: 'Invertir en prevención es la decisión más inteligente para tu sonrisa a largo plazo',
    servicios: [
      { nombre: 'Limpieza dental', precio: '$600', descripcion: 'Limpieza profunda, eliminación de sarro y pulido dental.' },
      { nombre: 'Guarda oclusal', precio: '$600', descripcion: 'Protección dental nocturna personalizada.' },
      { nombre: 'Tratamiento periodontal', precio: '$1,500', descripcion: 'Tratamientos para mantener la salud de las encías.' }
    ]
  },
  estetica: {
    titulo: 'Estética y Sonrisa',
    descripcion: 'Transformamos tu sonrisa con tratamientos que realzan tu belleza natural y confianza',
    servicios: [
      { nombre: 'Resinas', precio: '$1,000', descripcion: 'Restauración estética directa con resina fotocurable.' },
      { nombre: 'Blanqueamiento', precio: '$2,500', descripcion: 'Tratamiento para mejorar la tonalidad de tu sonrisa.' },
      { nombre: 'Carillas de resina', precio: '$1,000 - $2,000', descripcion: 'Mejora estética de la forma y tono mediante resina.' }
    ]
  },
  restauracion: {
    titulo: 'Restauración y Especialidades',
    descripcion: 'Devolvemos funcionalidad y armonía a tu mordida con tratamientos de precisión',
    servicios: [
      { nombre: 'Extracción', precio: '$800 - $2,500', descripcion: 'Extracción dental simple o quirúrgica.' },
      { nombre: 'Endodoncia', precio: '$3,500', descripcion: 'Tratamiento de conducto para salvar piezas dentales.' },
      { nombre: 'Prótesis removible', precio: '$3,000', descripcion: 'Rehabilitación dental removible parcial o total.' },
      { nombre: 'Prótesis fija', precio: '$4,500', descripcion: 'Coronas y puentes fijos de alta durabilidad.' },
      { nombre: 'Brackets (Ortodoncia)', precio: '$5,000', descripcion: 'Corrección de alineación dental y mordida.' },
      { nombre: 'Implantes', precio: '$25,000', descripcion: 'Reemplazo permanente de pieza dental con titanio.' }
    ]
  }
};