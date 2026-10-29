import PurposeGrid from '../components/about/PurposeGrid.jsx'
import StorySection from '../components/about/StorySection.jsx'
import TeamGrid from '../components/about/TeamGrid.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import { EQUIPO } from '../data/equipo.js'
import {
  CTA_QUIENES,
  EQUIPO_SECCION,
  HERO_QUIENES,
  HISTORIA,
  HITOS,
  PROPOSITO,
} from '../data/quienesSomos.js'

export default function QuienesSomos() {
  return (
    <>
      <PageHero {...HERO_QUIENES} titleId="quienes-title" />
      <StorySection historia={HISTORIA} hitos={HITOS} />
      <PurposeGrid proposito={PROPOSITO} />
      <TeamGrid content={EQUIPO_SECCION} equipo={EQUIPO} />

      <section className="section section--tight">
        <div className="container">
          <CtaBand {...CTA_QUIENES} />
        </div>
      </section>
    </>
  )
}
