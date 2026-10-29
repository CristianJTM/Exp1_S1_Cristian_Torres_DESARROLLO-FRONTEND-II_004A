import CtaBand from './ui/CtaBand.jsx'
import PageHero from './ui/PageHero.jsx'
import SectionHead from './ui/SectionHead.jsx'
import { EQUIPO } from '../data/equipo.js'
import {
  CTA_QUIENES,
  EQUIPO_SECCION,
  HERO_QUIENES,
  HISTORIA,
  HITOS,
  PROPOSITO,
} from '../data/quienesSomos.js'

export default function QuienesSomos() {
  return (
    <>
      <PageHero {...HERO_QUIENES} titleId="quienes-title" />

      <section className="section" aria-labelledby="historia-title">
        <div className="container story">
          <div className="prose">
            <p className="eyebrow">{HISTORIA.eyebrow}</p>
            <h2 id="historia-title">{HISTORIA.title}</h2>
            {HISTORIA.paragraphs.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          <ol className="timeline">
            {HITOS.map((hito) => (
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
          <SectionHead
            eyebrow={PROPOSITO.eyebrow}
            title={PROPOSITO.title}
            titleId="proposito-title"
          />

          <div className="mv-grid">
            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                {PROPOSITO.mision.icono}
              </span>
              <h3>{PROPOSITO.mision.titulo}</h3>
              <p>{PROPOSITO.mision.texto}</p>
            </article>

            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                {PROPOSITO.vision.icono}
              </span>
              <h3>{PROPOSITO.vision.titulo}</h3>
              <p>{PROPOSITO.vision.texto}</p>
            </article>

            <article className="mv-card">
              <span className="mv-card__icon" aria-hidden="true">
                {PROPOSITO.valores.icono}
              </span>
              <h3>{PROPOSITO.valores.titulo}</h3>
              <ul className="check-list">
                {PROPOSITO.valores.items.map((valor) => (
                  <li key={valor}>{valor}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="equipo-title">
        <div className="container">
          <SectionHead {...EQUIPO_SECCION} titleId="equipo-title" />

          <div className="team-grid">
            {EQUIPO.map((integrante) => (
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
          <CtaBand {...CTA_QUIENES} />
        </div>
      </section>
    </>
  )
}
