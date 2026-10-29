import SectionHead from '../ui/SectionHead.jsx'
import styles from './BenefitsGrid.module.css'

export default function BenefitsGrid({ content, beneficios, titleId = 'beneficios-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} />

        <div className={styles.benefitsGrid}>
          {beneficios.map((beneficio) => (
            <article className={styles.benefit} key={beneficio.titulo}>
              <span className={styles.benefitIcon} aria-hidden="true">
                {beneficio.icono}
              </span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
