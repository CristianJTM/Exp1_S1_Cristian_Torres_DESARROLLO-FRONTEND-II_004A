import styles from './PurposeGrid.module.css'

export default function MvCard({ icon, title, children }) {
  return (
    <article className={styles.mvCard}>
      <span className={styles.mvCardIcon} aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
