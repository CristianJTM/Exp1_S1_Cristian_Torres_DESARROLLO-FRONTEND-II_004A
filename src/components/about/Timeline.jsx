import TimelineItem from './TimelineItem.jsx'

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
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
