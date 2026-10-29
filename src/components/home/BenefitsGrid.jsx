import SectionHead from '../ui/SectionHead.jsx'

export default function BenefitsGrid({ content, beneficios, titleId = 'beneficios-title' }) {
  return (
    <section className="section" aria-labelledby={titleId}>
      <div className="container">
        <SectionHead {...content} titleId={titleId} />

        <div className="benefits-grid">
          {beneficios.map((beneficio) => (
            <article className="benefit" key={beneficio.titulo}>
              <span className="benefit__icon" aria-hidden="true">
                {beneficio.icono}
              </span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
