import { About } from "./components/About/About";
import { Download } from "./components/Download/Download";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

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
