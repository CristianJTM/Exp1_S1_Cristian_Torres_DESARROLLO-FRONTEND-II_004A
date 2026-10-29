import styles from './PageHero.module.css'

export default function PageHero({ eyebrow, title, lead, titleId }) {
  return (
    <section className={styles.pageHero} aria-labelledby={titleId}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p className={styles.pageHeroLead}>{lead}</p>
      </div>
    </section>
  )
}
