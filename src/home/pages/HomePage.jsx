import { Navbar } from '../components/navbar/Navbar.jsx'
import { Header } from '../components/header/Header.jsx'
import { About } from '../components/about/About.jsx'
import { Download } from '../components/download/Download.jsx'
import { Footer } from '../components/footer/Footer.jsx'

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
