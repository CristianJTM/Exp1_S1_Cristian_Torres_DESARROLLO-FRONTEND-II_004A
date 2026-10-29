import styles from './Timeline.module.css'

export default function TimelineItem({ year, title, text }) {
  return (
    <li className={styles.timelineItem}>
      <span className={styles.timelineYear}>{year}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  )
}
