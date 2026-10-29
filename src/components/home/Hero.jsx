import { Link } from 'react-router-dom'
import StatList from '../ui/StatList.jsx'

export default function Hero({ content, stats }) {
  const { eyebrow, title, titleHighlight, lead, checks, primaryCta, secondaryCta, visual } =
    content

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="hero-title">
            {title} <span>{titleHighlight}</span>
          </h1>
          <p className="hero__lead">{lead}</p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to={primaryCta.to}>
              {primaryCta.label}
            </Link>
            <Link className="btn btn--ghost" to={secondaryCta.to}>
              {secondaryCta.label}
            </Link>
          </div>

          <ul className="hero__checks">
            {checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <span className="hero__emoji">{visual.emoji}</span>
          <span className="hero__tag hero__tag--top">{visual.tagTop}</span>
          <span className="hero__tag hero__tag--bottom">{visual.tagBottom}</span>
        </div>
      </div>

      <div className="container">
        <StatList items={stats} />
      </div>
    </section>
  )
}
