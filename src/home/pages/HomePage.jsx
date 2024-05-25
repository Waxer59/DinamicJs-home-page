import { About } from '../components/about/About'
import { Download } from '../components/download/Download'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Navbar } from '../components/navbar/Navbar'

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
