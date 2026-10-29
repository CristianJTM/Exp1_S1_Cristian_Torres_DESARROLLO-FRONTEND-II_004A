import styles from './StatList.module.css'

export default function StatList({ items }) {
  return (
    <dl className={styles.stats}>
      {items.map(({ valor, etiqueta }) => (
        <div className={styles.stat} key={etiqueta}>
          <dt>{etiqueta}</dt>
          <dd>{valor}</dd>
        </div>
      ))}
    </dl>
  )
}
