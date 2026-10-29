import { FOOTER } from '../../data/sitio.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.appFooter}>
      <div className={`container ${styles.appFooterInner}`}>
        <p className={styles.appFooterBrand}>
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
