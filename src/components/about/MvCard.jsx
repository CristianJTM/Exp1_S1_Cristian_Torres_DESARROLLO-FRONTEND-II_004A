export default function MvCard({ icon, title, children }) {
  return (
    <article className="mv-card">
      <span className="mv-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
