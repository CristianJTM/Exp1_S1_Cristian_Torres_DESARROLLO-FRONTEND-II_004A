import SectionHead from '../ui/SectionHead.jsx'
import styles from './CategoryGrid.module.css'

export default function CategoryGrid({ content, categorias, titleId = 'categorias-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} />

        <div className={styles.categoryGrid}>
          {categorias.map((categoria) => (
            <article className={styles.categoryCard} key={categoria.id}>
              <span className={styles.categoryCardEmoji} aria-hidden="true">
                {categoria.emoji}
              </span>
              <h3>{categoria.nombre}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
