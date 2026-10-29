import styles from './ContactInfo.module.css'

export default function ContactInfo({ content, items }) {
  return (
    <aside className={styles.contactInfo} aria-labelledby="info-title">
      <h2 id="info-title">{content.infoTitle}</h2>
      <p className={styles.contactInfoLead}>{content.infoLead}</p>

      <ul className={styles.contactList}>
        {items.map((item) => (
          <li className={styles.contactItem} key={item.titulo}>
            <span className={styles.contactItemIcon} aria-hidden="true">
              {item.icono}
            </span>
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.detalle}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className={styles.contactInfoNote}>{content.infoNote}</p>
    </aside>
  )
}
