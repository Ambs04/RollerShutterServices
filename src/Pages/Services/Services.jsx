import conveyorBelt from "../../assets/conveyor_belts.png";
import installDoors from "../../assets/install_doors.png";
import manufactureDoors from "../../assets/manufacture_doors.png";
import shutterRepairs from "../../assets/shutter_repairs.png";
import stripCurtains from "../../assets/strip_curtains.png";
import windowShutters from "../../assets/window_shutters.png";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const service = [
    {
      img: manufactureDoors,
      title: "Manufacturing",
      description:
        "Built in-house using premium-quality steel for lasting durability.",
    },
    {
      img: installDoors,
      title: "Installation",
      description: "Professional installation with reliable aftercare support.",
    },
    {
      img: shutterRepairs,
      title: "Repairs and Servicing",
      description:
        "Expert repairs and routine servicing to keep your shutters performing.",
    },
    {
      img: stripCurtains,
      title: "Installation of Strip Curtains",
      description:
        "Professional strip curtain installation for commercial and industrial spaces.",
    },
    {
      img: conveyorBelt,
      title: "Installation of Conveyor Belts",
      description:
        "Efficient conveyor belt installation tailored to your requirements.",
    },
    {
      img: windowShutters,
      title: "Installation of Window Shutters",
      description:
        "Expert installation of stylish and functional window shutters for your home.",
    },
  ];

  return (
    <div class="bg-[#353535] min-h-screen">
      <Header />
      <div class="py-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-12 mb-16 text-center">
          <h1 class="text-[#e0e1e6] text-xl underline mb-3" data-aos="fade-in">
            Our Services
          </h1>
          <p class="text-[#e0e1e6]/50">
            We offer a range of services from installation of roller shutters to
            the installation of window shutters.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.map((i, index) => (
            <div
              key={index}
              class="group overflow-hidden rounded-2xl border border-white/10 bg-[#181818] transition-all duration-300 hover:-translate-y-2 hover:border-[#F22233]/40 hover:bg-[#202020]"
              data-aos="fade-right"
            >
              <div class="h-2/4 w-full">
                <img
                  src={i.img}
                  class="object-cover h-full w-full shadow-2xl"
                />
              </div>
              <div class="text-center mt-6  flex flex-col justify-center items-center lg:justify-start ">
                <p class="mb-3 text-[#e0e1e6]/70 text-lg px-3">{i.title}</p>
                <p class="text-[#e0e1e6]/40 text-sm px-3">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="mt-16 text-center">
          <Link to="/blinds">
            <button class="bg-[#F2B90F] hover:bg-[#A68626] py-4 px-3 rounded-xl font-semibold hover:text-[#e0e1e6]">
              VIEW OUR BLINDS RANGE
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
