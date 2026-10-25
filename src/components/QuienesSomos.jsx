import { Link } from 'react-router-dom'
import { equipo } from '../data/equipo.js'

const hitos = [
  {
    año: '2016',
    titulo: 'Nace el almacén de barrio',
    texto:
      'La familia Torres abre un pequeño almacén en Temuco con lo esencial: frutas, pan y lácteos para los vecinos.',
  },
  {
    año: '2019',
    titulo: 'El local crece',
    texto:
      'La buena recepción del barrio nos permite ampliar el local e incorporar carnes, despensa y productos de limpieza.',
  },
  {
    año: '2021',
    titulo: 'Despacho a domicilio',
    texto:
      'Comenzamos a llevar pedidos a la puerta de cada casa, sin dejar de atender el mostrador.',
  },
  {
    año: '2026',
    titulo: 'Diez años acompañando al barrio',
    texto:
      'Hoy somos un equipo de 12 personas que trabaja cada día para que comprar rico sea simple, en el mismo local de siempre.',
  },
]

const valores = [
  'Cercanía: conocemos a nuestros vecinos por su nombre.',
  'Frescura: revisamos la calidad de cada producto antes de exhibirlo.',
  'Transparencia: precios claros y ofertas sin letra chica.',
  'Trabajo local: compramos a pequeños productores de la zona.',
]

export default function QuienesSomos() {
  return (
    <>
      <section className="page-hero" aria-labelledby="quienes-title">
        <div className="container">
          <p className="eyebrow">Nuestra historia</p>
          <h1 id="quienes-title">Una familia que crece contigo</h1>
          <p className="page-hero__lead">
            Desde 2016, Súper Fresco ha sido el almacén de confianza del barrio. Hoy tenemos un
            local en Temuco y el mismo compromiso de siempre: buena comida, precios justos y
            atención cercana.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="historia-title">
        <div className="container story">
          <div className="prose">
            <p className="eyebrow">Cómo empezó todo</p>
            <h2 id="historia-title">De un pequeño almacén a tu supermercado de confianza</h2>
            <p>
              Todo comenzó con un mesón de madera, una balanza y las ganas de ofrecer algo mejor al
              barrio. Cristian Torres y su familia abrieron las puertas del local en 2016,
              cuando conseguir fruta fresca cerca de casa no era tan fácil.
            </p>
            <p>
              Con los años, los vecinos se fueron convirtiendo en clientes de todas las semanas y
              el almacén creció con ellos. Sumamos nuevos productos, ampliamos el local y armamos
              un equipo que comparte una idea simple: comprar debería ser una experiencia cercana,
              no una carrera contra el reloj.
            </p>
            <p>
              Hoy seguimos eligiendo proveedores en persona, revisando la fruta cada mañana y
              saludando a quien entra por la puerta. Porque crecer no significa dejar de ser un
              supermercado de barrio.
            </p>
          </div>

          <ol className="timeline">
            {hitos.map((hito) => (
              <li className="timeline__item" key={hito.año}>
                <span className="timeline__year">{hito.año}</span>
                <h3>{hito.titulo}</h3>
                <p>{hito.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="proposito-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Lo que nos mueve</p>
            <h2 id="proposito-title">Misión, visión y valores</h2>
          </div>

          <div className="mv-grid">
            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                🎯
              </span>
              <h3>Misión</h3>
              <p>
                Acercar productos frescos y de calidad a cada familia, con precios justos y una
                atención cercana que haga la compra más simple.
              </p>
            </article>

            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                🌄
              </span>
              <h3>Visión</h3>
              <p>
                Ser el supermercado de barrio referente en Temuco y La Araucanía, reconocido por su
                frescura, su servicio y su compromiso con los proveedores locales.
              </p>
            </article>

            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                💚
              </span>
              <h3>Valores</h3>
              <ul className="check-list">
                {valores.map((valor) => (
                  <li key={valor}>{valor}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="equipo-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Las personas detrás</p>
            <h2 id="equipo-title">Un equipo que conoce el barrio</h2>
            <p className="section-lead">
              Detrás de cada pasillo y cada caja hay personas que se preocupan de que tu compra
              salga bien.
            </p>
          </div>

          <div className="team-grid">
            {equipo.map((integrante) => (
              <article className="team-card" key={integrante.id}>
                <div
                  className="team-card__avatar"
                  style={{ backgroundColor: integrante.color }}
                  aria-hidden="true"
                >
                  {integrante.iniciales}
                </div>
                <h3>{integrante.nombre}</h3>
                <p className="team-card__role">{integrante.cargo}</p>
                <p className="team-card__bio">{integrante.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>¿Quieres conocer nuestro local?</h2>
              <p>
                Te esperamos en Calle Falsa 123, Temuco. Escríbenos si quieres coordinar una visita
                o un pedido con despacho a domicilio.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--light" to="/contacto">
                Contáctanos
              </Link>
              <Link className="btn btn--outline-light" to="/">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
