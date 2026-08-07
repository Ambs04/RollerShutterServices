import Header from "../../Components/Common Components/Header";
import Hero from "./Hero";
import About from "./About";
import Process from "./Process";

import Footer from "../../Components/Common Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <div>
        <p>
          Ready To Get <i>Rolling</i> ? <Link to="/contact">CONTACT US</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
