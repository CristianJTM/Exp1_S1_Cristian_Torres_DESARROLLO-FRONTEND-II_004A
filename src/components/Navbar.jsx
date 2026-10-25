import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: '🏠' },
  { to: '/quienes-somos', label: 'Quiénes somos', icon: '🏪' },
  { to: '/contacto', label: 'Contáctanos', icon: '✉️' },
]

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__inner">
        {NAV_ITEMS.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon" aria-hidden="true">
              {icon}
            </span>
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
