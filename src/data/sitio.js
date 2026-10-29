export const NEGOCIO = {
  nombre: 'Súper Fresco',
  fundacion: 2016,
  direccion: 'Calle Falsa 123',
  ciudad: 'Temuco',
  region: 'La Araucanía',
  telefono: '+56 2 2345 6789',
  email: 'hola@superfresco.cl',
  horario: 'Lunes a domingo · 08:00 a 21:00',
}

export const DIRECCION_CORTA = `${NEGOCIO.direccion}, ${NEGOCIO.ciudad}`
export const DIRECCION_COMPLETA = `${DIRECCION_CORTA}, ${NEGOCIO.region}`

export const AUTOR = 'Cristian Torres'
export const CURSO = 'PFY2202'
export const ASIGNATURA = 'Desarrollo Frontend II'

export const FOOTER = {
  marca: NEGOCIO.nombre,
  curso: CURSO,
  asignatura: ASIGNATURA,
  autor: AUTOR,
}
