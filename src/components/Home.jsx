import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { BENEFICIOS, CIFRAS, CTA_HOME, HERO_HOME, SECCIONES_HOME } from '../data/home.js'
import { CATEGORIAS, PRODUCTOS } from '../data/productos.js'

const destacados = PRODUCTOS.filter((producto) => producto.destacado)

export default function Home() {
  const { categorias, destacados: seccionDestacados, beneficios: seccionBeneficios } =
    SECCIONES_HOME

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">{HERO_HOME.eyebrow}</p>
            <h1 id="hero-title">
              {HERO_HOME.title} <span>{HERO_HOME.titleHighlight}</span>
            </h1>
            <p className="hero__lead">{HERO_HOME.lead}</p>

            <div className="hero__actions">
              <Link className="btn btn--primary" to={HERO_HOME.primaryCta.to}>
                {HERO_HOME.primaryCta.label}
              </Link>
              <Link className="btn btn--ghost" to={HERO_HOME.secondaryCta.to}>
                {HERO_HOME.secondaryCta.label}
              </Link>
            </div>

            <ul className="hero__checks">
              {HERO_HOME.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <span className="hero__emoji">{HERO_HOME.visual.emoji}</span>
            <span className="hero__tag hero__tag--top">{HERO_HOME.visual.tagTop}</span>
            <span className="hero__tag hero__tag--bottom">{HERO_HOME.visual.tagBottom}</span>
          </div>
        </div>

        <div className="container">
          <dl className="stats">
            {CIFRAS.map(({ valor, etiqueta }) => (
              <div className="stat" key={etiqueta}>
                <dt>{etiqueta}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="categorias-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{categorias.eyebrow}</p>
            <h2 id="categorias-title">{categorias.title}</h2>
            <p className="section-lead">{categorias.lead}</p>
          </div>

          <div className="category-grid">
            {CATEGORIAS.map((categoria) => (
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

      <section className="section section--muted" aria-labelledby="destacados-title">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow">{seccionDestacados.eyebrow}</p>
              <h2 id="destacados-title">{seccionDestacados.title}</h2>
              <p className="section-lead">{seccionDestacados.lead}</p>
            </div>
            <p className="section-note">{seccionDestacados.note}</p>
          </div>

          <div className="product-grid">
            {destacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="beneficios-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{seccionBeneficios.eyebrow}</p>
            <h2 id="beneficios-title">{seccionBeneficios.title}</h2>
          </div>

          <div className="benefits-grid">
            {BENEFICIOS.map((beneficio) => (
              <article className="benefit" key={beneficio.titulo}>
                <span className="benefit__icon" aria-hidden="true">
                  {beneficio.icono}
                </span>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{CTA_HOME.title}</h2>
              <p>{CTA_HOME.text}</p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--light" to={CTA_HOME.primary.to}>
                {CTA_HOME.primary.label}
              </Link>
              <Link className="btn btn--outline-light" to={CTA_HOME.secondary.to}>
                {CTA_HOME.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
