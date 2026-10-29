export default function TimelineItem({ year, title, text }) {
  return (
    <li className="timeline__item">
      <span className="timeline__year">{year}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  )
}
