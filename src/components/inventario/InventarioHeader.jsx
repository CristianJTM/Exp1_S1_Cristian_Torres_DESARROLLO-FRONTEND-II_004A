export default function InventarioHeader({ eyebrow = 'Inventario', title, lead }) {
  return (
    <header>
      <p className="mb-0 text-xs font-extrabold uppercase tracking-[0.16em] text-sf-green">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-sf-text sm:text-4xl">
        {title}
      </h1>
      {lead && <p className="mt-3 mb-0 max-w-2xl text-sm leading-6 text-sf-muted">{lead}</p>}
    </header>
  )
}
