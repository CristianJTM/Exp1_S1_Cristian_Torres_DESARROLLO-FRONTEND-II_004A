import { formatearCLP } from '../../utils/formatoMoneda.js'
import styles from './ProductCard.module.css'

export default function ProductCard({ producto }) {
  const { nombre, categoria, precio, unidad, emoji, oferta, descripcion } = producto

  return (
    <article className={styles.productCard}>
      <div className={styles.productCardMedia} aria-hidden="true">
        <span className={styles.productCardEmoji}>{emoji}</span>
        {oferta && <span className="badge badge--offer">Oferta</span>}
      </div>

      <div className={styles.productCardBody}>
        <p className={styles.productCardCategory}>{categoria}</p>
        <h3>{nombre}</h3>
        <p className={styles.productCardDescription}>{descripcion}</p>
        <p className={styles.productCardPrice}>
          {formatearCLP(precio)}
          <span className={styles.productCardUnit}> / {unidad}</span>
        </p>
      </div>
    </article>
  )
}
