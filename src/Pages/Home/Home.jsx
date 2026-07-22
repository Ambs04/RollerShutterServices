import Header from "../../Components/Common Components/Header";
import Hero from "./Hero";
import About from "./About";
import Process from "./Process";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Common Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
