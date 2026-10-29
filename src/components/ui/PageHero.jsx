export default function PageHero({ eyebrow, title, lead, titleId }) {
  return (
    <section className="page-hero" aria-labelledby={titleId}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p className="page-hero__lead">{lead}</p>
      </div>
    </section>
  )
}
