export default function TeamCard({ integrante }) {
  return (
    <article className="team-card">
      <div
        className="team-card__avatar"
        style={{ backgroundColor: integrante.color }}
        aria-hidden="true"
      >
        {integrante.iniciales}
      </div>
      <h3>{integrante.nombre}</h3>
      <p className="team-card__role">{integrante.cargo}</p>
      <p className="team-card__bio">{integrante.descripcion}</p>
    </article>
  )
}
