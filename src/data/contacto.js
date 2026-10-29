import { DIRECCION_COMPLETA, NEGOCIO } from './sitio.js'

export const HERO_CONTACTO = {
  eyebrow: 'Hablemos',
  title: 'Contáctanos',
  lead: '¿Tienes una consulta, un pedido especial o una sugerencia? Escríbenos y te responderemos a la brevedad. También puedes visitarnos o llamarnos: nos encanta conversar con nuestros vecinos.',
}

export const CONTACTO_SECCION = {
  infoTitle: 'Datos de contacto',
  infoLead: 'Estamos en el corazón de Temuco y atendemos todos los días de la semana.',
  infoNote:
    'Para pedidos con despacho, escríbenos antes de las 15:00 y coordinamos la entrega para el mismo día.',
  formTitle: 'Envíanos un mensaje',
  formIntroBefore:
    'Completa el formulario y te responderemos dentro de las próximas 24 horas hábiles. Los campos marcados con ',
  formIntroAfter: ' son obligatorios.',
  formNote:
    'Este formulario es parte de un proyecto académico y no envía datos a ningún servidor.',
  formSuccessBefore: '¡Gracias, ',
  formSuccessAfter:
    '! Recibimos tu mensaje y te responderemos dentro de las próximas 24 horas hábiles.',
}

export const INFO_CONTACTO = [
  {
    icono: '📍',
    titulo: 'Visítanos',
    detalle: DIRECCION_COMPLETA,
  },
  {
    icono: '📞',
    titulo: 'Llámanos',
    detalle: NEGOCIO.telefono,
  },
  {
    icono: '✉️',
    titulo: 'Escríbenos',
    detalle: NEGOCIO.email,
  },
  {
    icono: '🕒',
    titulo: 'Horario',
    detalle: NEGOCIO.horario,
  },
]

export const ASUNTOS = [
  'Consulta general',
  'Pedido y despacho',
  'Sugerencias',
  'Trabaja con nosotros',
]

export const FORM_INICIAL = {
  nombre: '',
  email: '',
  telefono: '',
  asunto: ASUNTOS[0],
  mensaje: '',
}
