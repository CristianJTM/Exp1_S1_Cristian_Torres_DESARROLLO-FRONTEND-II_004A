import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './components/Home.jsx'
import QuienesSomos from './components/QuienesSomos.jsx'
import Contacto from './components/Contacto.jsx'
import NotFound from './components/NotFound.jsx'
import { FOOTER } from './data/sitio.js'

// En desarrollo BASE_URL es "/"; en GitHub Pages es "/<repositorio>/".
// React Router necesita el basename sin la barra final.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="app-shell">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

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
      </div>

      <Navbar />
    </BrowserRouter>
  )
}
