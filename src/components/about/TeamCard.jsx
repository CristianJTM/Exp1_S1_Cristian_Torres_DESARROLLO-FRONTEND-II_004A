import styles from './TeamGrid.module.css'

export default function TeamCard({ integrante }) {
  return (
    <article className={styles.teamCard}>
      <div
        className={styles.teamCardAvatar}
        style={{ backgroundColor: integrante.color }}
        aria-hidden="true"
      >
        {integrante.iniciales}
      </div>
      <h3>{integrante.nombre}</h3>
      <p className={styles.teamCardRole}>{integrante.cargo}</p>
      <p className={styles.teamCardBio}>{integrante.descripcion}</p>
    </article>
  )
}
