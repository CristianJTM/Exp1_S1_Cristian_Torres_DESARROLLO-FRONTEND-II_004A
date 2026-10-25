import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { categorias, productos } from '../data/productos.js'

const destacados = productos.filter((producto) => producto.destacado)

const cifras = [
  { valor: '10', etiqueta: 'años en el barrio' },
  { valor: '1', etiqueta: 'local en Temuco' },
  { valor: '+1.200', etiqueta: 'productos disponibles' },
  { valor: '98%', etiqueta: 'clientes satisfechos' },
]

const beneficios = [
  {
    icono: '🚚',
    titulo: 'Despacho el mismo día',
    descripcion: 'Pide antes de las 15:00 y recibe tu compra en la puerta de tu casa.',
  },
  {
    icono: '🏷️',
    titulo: 'Precios justos',
    descripcion: 'Ofertas reales cada semana, sin letra chica ni costos escondidos.',
  },
  {
    icono: '🌱',
    titulo: 'Productos locales',
    descripcion: 'Trabajamos con agricultores y proveedores de la zona para apoyar al barrio.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Supermercado de barrio desde 2016</p>
            <h1 id="hero-title">
              Frescura que se siente, <span>precios que se notan</span>
            </h1>
            <p className="hero__lead">
              En Súper Fresco seleccionamos cada día frutas, verduras y productos de despensa para
              que tu mesa tenga lo mejor, cerca de casa y al mejor precio.
            </p>

            <div className="hero__actions">
              <Link className="btn btn--primary" to="/contacto">
                Haz tu pedido
              </Link>
              <Link className="btn btn--ghost" to="/quienes-somos">
                Conócenos
              </Link>
            </div>

            <ul className="hero__checks">
              <li>Despacho el mismo día en Temuco</li>
              <li>Ofertas nuevas cada semana</li>
              <li>Atención cercana de verdad</li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <span className="hero__emoji">🧺</span>
            <span className="hero__tag hero__tag--top">100% fresco</span>
            <span className="hero__tag hero__tag--bottom">Ofertas de la semana</span>
          </div>
        </div>

        <div className="container">
          <dl className="stats">
            {cifras.map(({ valor, etiqueta }) => (
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
            <p className="eyebrow">Secciones</p>
            <h2 id="categorias-title">Todo lo que necesitas, en un solo lugar</h2>
            <p className="section-lead">
              Desde la feria hasta el aseo del hogar. Recorre nuestras secciones y encuentra lo que
              buscas sin dar vueltas.
            </p>
          </div>

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

      <section className="section section--muted" aria-labelledby="destacados-title">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow">Selección semanal</p>
              <h2 id="destacados-title">Los favoritos de la semana</h2>
              <p className="section-lead">
                Una selección de nuestro equipo para llenar tu despensa con lo mejor de la temporada.
              </p>
            </div>
            <p className="section-note">Precios válidos hasta el domingo</p>
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
            <p className="eyebrow">La diferencia</p>
            <h2 id="beneficios-title">Comprar aquí tiene sus ventajas</h2>
          </div>

          <div className="benefits-grid">
            {beneficios.map((beneficio) => (
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
              <h2>¿Hacemos tu compra más fácil?</h2>
              <p>
                Escríbenos y coordinamos tu pedido con despacho a domicilio. También puedes
                visitarnos en nuestro local de Temuco.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--light" to="/contacto">
                Escríbenos
              </Link>
              <Link className="btn btn--outline-light" to="/quienes-somos">
                Conoce nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
