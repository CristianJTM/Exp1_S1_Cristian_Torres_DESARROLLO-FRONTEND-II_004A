import ContactForm from '../components/contact/ContactForm.jsx'
import ContactInfo from '../components/contact/ContactInfo.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import { CONTACTO_SECCION, HERO_CONTACTO, INFO_CONTACTO } from '../data/contacto.js'
import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <>
      <PageHero {...HERO_CONTACTO} titleId="contacto-title" />

      <section className="section section--contact">
        <div className={`container ${styles.contactGrid}`}>
          <ContactInfo content={CONTACTO_SECCION} items={INFO_CONTACTO} />
          <ContactForm />
        </div>
      </section>
    </>
  )
}
