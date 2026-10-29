import Timeline from './Timeline.jsx'
import styles from './StorySection.module.css'

export default function StorySection({ historia, hitos, titleId = 'historia-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className={`container ${styles.story}`}>
        <div className={styles.prose}>
          <p className="eyebrow">{historia.eyebrow}</p>
          <h2 id={titleId}>{historia.title}</h2>
          {historia.paragraphs.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </div>

        <Timeline items={hitos} />
      </div>
    </section>
  )
}
