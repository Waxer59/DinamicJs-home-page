import { About } from "../home/components/About/About";
import { Download } from "../home/components/Download/Download";
import { Footer } from "../home/components/Footer/Footer";
import { Header } from "../home/components/Header/Header";
import { Navbar } from "../home/components/Navbar/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Download />
      <Footer />
    </>
  );
};
