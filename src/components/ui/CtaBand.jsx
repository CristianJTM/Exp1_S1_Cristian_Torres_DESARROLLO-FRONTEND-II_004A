import { Link } from 'react-router-dom'

export default function CtaBand({ title, text, primary, secondary }) {
  return (
    <div className="cta-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <Link className="btn btn--light" to={primary.to}>
          {primary.label}
        </Link>
        {secondary && (
          <Link className="btn btn--outline-light" to={secondary.to}>
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  )
}
