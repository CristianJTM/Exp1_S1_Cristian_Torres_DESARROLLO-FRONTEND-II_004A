import { FOOTER } from '../../data/sitio.js'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container app-footer__inner">
        <p className="app-footer__brand">
          <span aria-hidden="true">🛒</span> {FOOTER.marca}
        </p>
        <p>
          Proyecto académico <strong>{FOOTER.curso}</strong> · {FOOTER.asignatura}
        </p>
        <p>Desarrollado por {FOOTER.autor}</p>
      </div>
    </footer>
  )
}
