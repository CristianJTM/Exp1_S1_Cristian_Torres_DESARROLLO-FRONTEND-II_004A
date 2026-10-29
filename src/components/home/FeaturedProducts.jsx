import ProductCard from '../products/ProductCard.jsx'
import SectionHead from '../ui/SectionHead.jsx'
import styles from './FeaturedProducts.module.css'

export default function FeaturedProducts({
  content,
  productos,
  titleId = 'destacados-title',
}) {
  const destacados = productos.filter((producto) => producto.destacado)

  return (
    <section className="section section--muted" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} row />

        <div className={styles.productGrid}>
          {destacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  )
}
