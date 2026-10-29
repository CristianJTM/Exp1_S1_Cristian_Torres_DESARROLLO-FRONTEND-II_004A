import styles from './SectionHead.module.css'

export default function SectionHead({ eyebrow, title, lead, titleId, note, row = false }) {
  return (
    <div className={`${styles.sectionHead}${row ? ` ${styles.sectionHeadRow}` : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {lead && <p className={styles.sectionLead}>{lead}</p>}
      </div>
      {note && <p className={styles.sectionNote}>{note}</p>}
    </div>
  )
}
