import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import Phase1 from '@/components/Phase1'
import Phase2 from '@/components/Phase2'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Phase1 />
        <Phase2 />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
