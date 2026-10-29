import { formatearCLP } from '../../utils/formatoMoneda.js'

export default function ProductCard({ producto }) {
  const { nombre, categoria, precio, unidad, emoji, oferta, descripcion } = producto

  return (
    <article className="product-card">
      <div className="product-card__media" aria-hidden="true">
        <span className="product-card__emoji">{emoji}</span>
        {oferta && <span className="badge badge--offer">Oferta</span>}
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{categoria}</p>
        <h3>{nombre}</h3>
        <p className="product-card__description">{descripcion}</p>
        <p className="product-card__price">
          {formatearCLP(precio)}
          <span className="product-card__unit"> / {unidad}</span>
        </p>
      </div>
    </article>
  )
}
