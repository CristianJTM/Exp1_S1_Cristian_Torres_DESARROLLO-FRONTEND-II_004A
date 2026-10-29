const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TELEFONO_REGEX = /^\+?[\d\s]{8,15}$/

export function validarContacto(form) {
  const errores = {}

  if (form.nombre.trim().length < 2) {
    errores.nombre = 'Ingresa tu nombre completo.'
  }

  if (!EMAIL_REGEX.test(form.email.trim())) {
    errores.email = 'Ingresa un correo válido, por ejemplo nombre@correo.cl.'
  }

  if (form.telefono.trim() && !TELEFONO_REGEX.test(form.telefono.trim())) {
    errores.telefono = 'Ingresa un teléfono válido o deja el campo vacío.'
  }

  if (form.mensaje.trim().length < 10) {
    errores.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).'
  }

  return errores
}
