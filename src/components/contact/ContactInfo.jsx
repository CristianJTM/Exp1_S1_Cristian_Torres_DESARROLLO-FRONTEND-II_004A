export default function ContactInfo({ content, items }) {
  return (
    <aside className="contact-info" aria-labelledby="info-title">
      <h2 id="info-title">{content.infoTitle}</h2>
      <p className="contact-info__lead">{content.infoLead}</p>

      <ul className="contact-list">
        {items.map((item) => (
          <li className="contact-item" key={item.titulo}>
            <span className="contact-item__icon" aria-hidden="true">
              {item.icono}
            </span>
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.detalle}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="contact-info__note">{content.infoNote}</p>
    </aside>
  )
}
