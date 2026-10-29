import TimelineItem from './TimelineItem.jsx'
import styles from './Timeline.module.css'

export default function Timeline({ items }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <TimelineItem
          key={item.año}
          year={item.año}
          title={item.titulo}
          text={item.texto}
        />
      ))}
    </ol>
  )
}
