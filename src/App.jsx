import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

// En desarrollo BASE_URL es "/"; en GitHub Pages es "/<repositorio>/".
// React Router necesita el basename sin la barra final.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
