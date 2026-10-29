export default function StatList({ items }) {
  return (
    <dl className="stats">
      {items.map(({ valor, etiqueta }) => (
        <div className="stat" key={etiqueta}>
          <dt>{etiqueta}</dt>
          <dd>{valor}</dd>
        </div>
      ))}
    </dl>
  )
}
