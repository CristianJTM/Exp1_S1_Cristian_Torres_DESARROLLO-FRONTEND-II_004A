import { useState } from 'react'
import { validarContacto } from '../utils/validacion.js'

export default function useContactForm(initialValues) {
  const [form, setForm] = useState(initialValues)
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

    const nuevosErrores = validarContacto(form)
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false)
      return
    }

    setNombreEnviado(form.nombre.trim())
    setForm(initialValues)
    setEnviado(true)
  }

  return {
    form,
    errores,
    enviado,
    nombreEnviado,
    handleChange,
    handleSubmit,
  }
}
