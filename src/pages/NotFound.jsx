import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="not-found__code">404</p>
        <h1>Esta página se fue de compras</h1>
        <p className="not-found__lead">
          No encontramos la dirección que buscas. Puede que el enlace haya cambiado o que la página
          ya no exista.
        </p>
        <Link className="btn btn--primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
