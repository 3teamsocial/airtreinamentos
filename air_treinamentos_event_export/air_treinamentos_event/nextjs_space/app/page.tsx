
import Hero from '@/components/hero'
import EventOverview from '@/components/event-overview'
import Topics from '@/components/topics'
import Speakers from '@/components/speakers'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PreInscricaoForm from '@/components/PreInscricaoForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <PreInscricaoForm />
      <Hero />
      <EventOverview />
      <Topics />
      <Speakers />
      <Contact />
      <Footer />
    </main>
  )
}
