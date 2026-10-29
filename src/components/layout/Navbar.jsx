import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navegacion.js'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      <div className={styles.navbarInner}>
        {NAV_ITEMS.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
            }
          >
            <span className={styles.navIcon} aria-hidden="true">
              {icon}
            </span>
            <span className={styles.navLabel}>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
