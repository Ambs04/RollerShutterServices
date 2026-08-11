import blindsVid from "../../assets/blinds.mp4";
//import blindsVid from "../../assets/blinds_edited.mp4";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";
import { Link } from "react-router-dom";

export default function Blinds() {
  return (
    <div class="bg-[#353535] min-h-screen">
      <Header />
      <div class="py-27 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto flex h-[600px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#0D0D0D]">
          <video
            autoPlay
            muted
            loop
            playsInline
            class="max-h-full max-w-full object-contain"
          >
            <source src={blindsVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="mt-16 max-w-4xl mx-auto ">
          <h2
            class="text-[#e0e1e6]/70 text-xl underline text-center font-semibold mb-6"
            data-aos="fade-in"
          >
            Professional Window Shutter Installation
          </h2>
          <p class="text-[#e0e1e6]/50 text-lg  mb-6" data-aos="fade-in">
            Enhance your home or business with premium Luminos window shutters,
            expertly supplied and installed by our experienced team. Combining
            timeless style with everyday practicality, these made-to-measure
            shutters are designed to complement any interior while providing
            exceptional light control, privacy, and lasting durability.
          </p>
          <p class="text-[#e0e1e6]/50 text-lg  mb-6" data-aos="fade-in">
            Whether you're renovating a single room or fitting out an entire
            property, we ensure every shutter is professionally measured and
            installed for a seamless finish. Available in a range of colours and
            finishes, Luminos shutters offer a sophisticated, low-maintenance
            solution that adds value, improves energy efficiency, and stands the
            test of time.
          </p>
        </div>
        <div
          class="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-[#161616] px-6 py-14 text-center sm:px-12"
          data-aos="fade-left"
        >
          <p class="text-2xl font-bold text-[#F2B90F] sm:text-3xl">
            Looking to Upgrade Your Windows?
          </p>

          <p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E0E1E6]/60 sm:text-base">
            Get in touch with us today for a free consultation and no-obligation
            quotation on professionally supplied and installed Luminos window
            shutters.
          </p>
          <Link to="/contact">
            <button
              class=" mt-8
        rounded-xl
        bg-[#F22233]
        px-8
        py-3
        text-sm
        font-semibold
        
        text-[#e0e1e6]
        shadow-lg
        shadow-[#F22233]/20
        transition-all
        duration-300
        
        hover:bg-[#590C13]
        hover:shadow-[#F22233]/30"
              data-aos="fade-in"
            >
              UPGRADE YOUR WINDOWS
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
