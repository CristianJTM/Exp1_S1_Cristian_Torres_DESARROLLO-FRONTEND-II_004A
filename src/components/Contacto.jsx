import { useState } from 'react'
import PageHero from './ui/PageHero.jsx'
import {
  ASUNTOS,
  CONTACTO_SECCION,
  FORM_INICIAL,
  HERO_CONTACTO,
  INFO_CONTACTO,
} from '../data/contacto.js'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TELEFONO_REGEX = /^\+?[\d\s]{8,15}$/

function validarFormulario(form) {
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

export default function Contacto() {
  const [form, setForm] = useState(FORM_INICIAL)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [nombreEnviado, setNombreEnviado] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setForm((anterior) => ({ ...anterior, [name]: value }))
    setErrores((anteriores) => {
      const siguientes = { ...anteriores }
      delete siguientes[name]
      return siguientes
    })

    if (enviado) {
      setEnviado(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nuevosErrores = validarFormulario(form)
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false)
      return
    }

    setNombreEnviado(form.nombre.trim())
    setForm(FORM_INICIAL)
    setEnviado(true)
  }

  return (
    <>
      <PageHero {...HERO_CONTACTO} titleId="contacto-title" />

      <section className="section section--contact">
        <div className="container contact-grid">
          <aside className="contact-info" aria-labelledby="info-title">
            <h2 id="info-title">{CONTACTO_SECCION.infoTitle}</h2>
            <p className="contact-info__lead">{CONTACTO_SECCION.infoLead}</p>

            <ul className="contact-list">
              {INFO_CONTACTO.map((item) => (
                <li className="contact-item" key={item.titulo}>
                  <span className="contact-item__icon" aria-hidden="true">
                    {item.icono}
                  </span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.detalle}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="contact-info__note">{CONTACTO_SECCION.infoNote}</p>
          </aside>

          <div className="form-card">
            <h2>{CONTACTO_SECCION.formTitle}</h2>
            <p className="form-card__intro">
              {CONTACTO_SECCION.formIntroBefore}
              <span className="required">*</span>
              {CONTACTO_SECCION.formIntroAfter}
            </p>

            {enviado && (
              <div className="form-success" role="status">
                <span aria-hidden="true">✅</span>
                <p>
                  ¡Gracias, {nombreEnviado}! Recibimos tu mensaje y te responderemos dentro de las
                  próximas 24 horas hábiles.
                </p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nombre">
                    Nombre completo <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Cristian Torres"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errores.nombre)}
                    aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                  />
                  {errores.nombre && (
                    <p className="form-error" id="error-nombre">
                      {errores.nombre}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Correo electrónico <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nombre@correo.cl"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errores.email)}
                    aria-describedby={errores.email ? 'error-email' : undefined}
                  />
                  {errores.email && (
                    <p className="form-error" id="error-email">
                      {errores.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="telefono">Teléfono (opcional)</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    autoComplete="tel"
                    aria-invalid={Boolean(errores.telefono)}
                    aria-describedby={errores.telefono ? 'error-telefono' : undefined}
                  />
                  {errores.telefono && (
                    <p className="form-error" id="error-telefono">
                      {errores.telefono}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="asunto">
                    Asunto <span className="required" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={form.asunto}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  >
                    {ASUNTOS.map((opcion) => (
                      <option key={opcion} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="mensaje">
                  Mensaje <span className="required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errores.mensaje)}
                  aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                />
                {errores.mensaje && (
                  <p className="form-error" id="error-mensaje">
                    {errores.mensaje}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Enviar mensaje
              </button>

              <p className="form-note">{CONTACTO_SECCION.formNote}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
