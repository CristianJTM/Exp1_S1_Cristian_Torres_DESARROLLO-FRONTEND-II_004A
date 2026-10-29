import BenefitsGrid from '../components/home/BenefitsGrid.jsx'
import CategoryGrid from '../components/home/CategoryGrid.jsx'
import FeaturedProducts from '../components/home/FeaturedProducts.jsx'
import Hero from '../components/home/Hero.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { BENEFICIOS, CIFRAS, CTA_HOME, HERO_HOME, SECCIONES_HOME } from '../data/home.js'
import { CATEGORIAS, PRODUCTOS } from '../data/productos.js'

export default function Home() {
  return (
    <>
      <Hero content={HERO_HOME} stats={CIFRAS} />
      <CategoryGrid content={SECCIONES_HOME.categorias} categorias={CATEGORIAS} />
      <FeaturedProducts content={SECCIONES_HOME.destacados} productos={PRODUCTOS} />
      <BenefitsGrid content={SECCIONES_HOME.beneficios} beneficios={BENEFICIOS} />

      <section className="section section--tight">
        <div className="container">
          <CtaBand {...CTA_HOME} />
        </div>
      </section>
    </>
  )
}
