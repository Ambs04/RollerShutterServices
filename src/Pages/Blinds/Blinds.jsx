import blindsVid from "../../assets/blinds.mp4";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";
import { HashLink } from "react-router-hash-link";

export default function Blinds() {
  return (
    <>
      <Header />
      <div>
        <div>
          <video autoPlay muted loop playsInline>
            <source src={blindsVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Professional Window Shutter Installation</h2>
          <p>
            Enhance your home or business with premium Luminos window shutters,
            expertly supplied and installed by our experienced team. Combining
            timeless style with everyday practicality, these made-to-measure
            shutters are designed to complement any interior while providing
            exceptional light control, privacy, and lasting durability.
          </p>
          <p>
            Whether you're renovating a single room or fitting out an entire
            property, we ensure every shutter is professionally measured and
            installed for a seamless finish. Available in a range of colours and
            finishes, Luminos shutters offer a sophisticated, low-maintenance
            solution that adds value, improves energy efficiency, and stands the
            test of time.
          </p>
        </div>
        <div>
          <p>Looking to Upgrade Your Windows?</p>

          <p>
            Get in touch with us today for a free consultation and no-obligation
            quotation on professionally supplied and installed Luminos window
            shutters.
          </p>
          <HashLink smooth to="/#contact">
            <button>Upgrade your windows</button>
          </HashLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
