import { About } from '../components/About'
import { Download } from '../components/Download'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Download />
      <Footer />
    </>
  )
}
