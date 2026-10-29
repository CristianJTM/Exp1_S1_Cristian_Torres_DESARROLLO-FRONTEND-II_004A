import SectionHead from '../ui/SectionHead.jsx'
import MvCard from './MvCard.jsx'

export default function PurposeGrid({ proposito, titleId = 'proposito-title' }) {
  return (
    <section className="section section--muted" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead
          eyebrow={proposito.eyebrow}
          title={proposito.title}
          titleId={titleId}
        />

        <div className="mv-grid">
          <MvCard icon={proposito.mision.icono} title={proposito.mision.titulo}>
            <p>{proposito.mision.texto}</p>
          </MvCard>

          <MvCard icon={proposito.vision.icono} title={proposito.vision.titulo}>
            <p>{proposito.vision.texto}</p>
          </MvCard>

          <MvCard icon={proposito.valores.icono} title={proposito.valores.titulo}>
            <ul className="check-list">
              {proposito.valores.items.map((valor) => (
                <li key={valor}>{valor}</li>
              ))}
            </ul>
          </MvCard>
        </div>
      </div>
    </section>
  )
}
