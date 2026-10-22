import { supabase } from '../../../core/api/supabaseClient';

export async function agendarCitaDesdeCliente({ nombre, telefono, whatsapp, servicioId, fechaHora, motivo }) {
  // 1. Crear el registro del paciente con sus datos básicos
  const { data: paciente, error: errorPaciente } = await supabase
    .from('pacientes')
    .insert([{
      nombre_completo: nombre,
      telefono: telefono,
      whatsapp: whatsapp
    }])
    .select()
    .single();

  if (errorPaciente) {
    console.error('Error al registrar paciente:', errorPaciente);
    throw errorPaciente;
  }

  // 2. Crear la cita asociada al paciente
  const { data: cita, error: errorCita } = await supabase
    .from('citas')
    .insert([{
      paciente_id: paciente.id,
      servicio_id: servicioId,
      fecha_hora: fechaHora,
      motivo_consulta: motivo,
      estado: 'pendiente'
    }])
    .select()
    .single();

  if (errorCita) {
    console.error('Error al crear la cita:', errorCita);
    throw errorCita;
  }

  return cita;
}