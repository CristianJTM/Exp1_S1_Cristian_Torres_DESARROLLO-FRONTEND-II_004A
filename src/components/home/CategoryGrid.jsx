import SectionHead from '../ui/SectionHead.jsx'

export default function CategoryGrid({ content, categorias, titleId = 'categorias-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} />

        <div className="category-grid">
          {categorias.map((categoria) => (
            <article className="category-card" key={categoria.id}>
              <span className="category-card__emoji" aria-hidden="true">
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
