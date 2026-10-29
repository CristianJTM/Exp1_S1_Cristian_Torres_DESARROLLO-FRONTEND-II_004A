export default function SectionHead({ eyebrow, title, lead, titleId, note, row = false }) {
  return (
    <div className={`section-head${row ? ' section-head--row' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}
