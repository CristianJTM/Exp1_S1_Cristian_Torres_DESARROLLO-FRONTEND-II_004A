import SectionHead from '../ui/SectionHead.jsx'
import TeamCard from './TeamCard.jsx'
import styles from './TeamGrid.module.css'

export default function TeamGrid({ content, equipo, titleId = 'equipo-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} />

        <div className={styles.teamGrid}>
          {equipo.map((integrante) => (
            <TeamCard key={integrante.id} integrante={integrante} />
          ))}
        </div>
      </div>
    </section>
  )
}
