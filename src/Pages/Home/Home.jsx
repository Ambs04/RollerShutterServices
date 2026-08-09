import Header from "../../Components/Common Components/Header";
import Hero from "./Hero";
import About from "./About";
import Process from "./Process";
import ServiceIntro from "./ServiceIntro";
import Footer from "../../Components/Common Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceIntro />
        <Process />
        <div class="bg-[#d7a40c] py-5 text-center text-[#e0e1e6] text-lg sm:text-xl font-semibold tracking-wide ">
          <p>
            Ready To Get <i>Rolling</i> ?{" "}
            <Link to="/contact" class="text-[#590C13]">
              CONTACT US
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
