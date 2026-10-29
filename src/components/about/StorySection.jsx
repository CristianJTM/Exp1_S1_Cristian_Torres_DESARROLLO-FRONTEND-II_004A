import Timeline from './Timeline.jsx'

export default function StorySection({ historia, hitos, titleId = 'historia-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container story">
        <div className="prose">
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
