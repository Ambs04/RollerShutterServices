import conveyorBelt from "../../assets/conveyor_belts.png";
import installDoors from "../../assets/install_doors.png";
import manufactureDoors from "../../assets/manufacture_doors.png";
import shutterRepairs from "../../assets/shutter_repairs.png";
import stripCurtains from "../../assets/strip_curtains.png";
import windowShutters from "../../assets/window_shutters.png";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";

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
    <>
      <Header />
      <div>
        <div>
          <h1>Our Services</h1>
          <p>
            We offer a range of services from installation of roller shutters to
            the installation of window shutters.
          </p>
        </div>
        <div>
          <div>
            {service.map((i, index) => (
              <div key={index}>
                <div>
                  <img src={i.img} />
                </div>
                <div>
                  <p>{i.title}</p>
                  <p>{i.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button>VIEW OUR BLINDS RANGE</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
