//import logo from "../../assets/logo.png";
import logo from "../../assets/RSS-LOGOS-BLACK-YELLOW.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer class="bg-[#272727]">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 gap-7">
          {/* Logo & Description */}
          <div class="flex flex-col items-start mb-4 gap-2">
            <img
              src={logo}
              alt="Roller Shutter Services Logo"
              class="w-auto h-12 object-contain "
            />

            <p class="max-w-xs leading-relaxed text-sm md:text-lg text-[#e0e1e6]/60 font-medium mb-3">
              With over 20 years of industry experience, RSS is a family-owned
              business committed to delivering high-quality roller shutter
              solutions for residential, commercial, and industrial properties.
              We combine expert craftsmanship, reliable service, and durable
              products with a strong focus on customer satisfaction, providing
              professional installation, maintenance, and repairs you can depend
              on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 class="tracking-widest text-lg  mb-4 text-[#e0e1e6]/80 font-semibold">
              Quick Links
            </h3>

            <nav class="text-[#e0e1e6]/80 text-sm sm:text-lg font-medium tracking-wide ">
              <ul class="space-y-3">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>

                <li>
                  <Link to="/blinds">Blinds</Link>
                </li>

                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 class="tracking-widest text-lg  mb-4 text-[#e0e1e6]/80 font-semibold">
              Contact
            </h3>
            <div class="text-[#e0e1e6]/80 text-sm sm:text-lg font-medium tracking-wide ">
              <div class="mb-4">
                <p class="pb-2">
                  <strong>Phone:</strong>
                </p>
                <a href="tel:+278813320">
                  <p>(+27) 71 881 3320</p>
                </a>
              </div>
              <div class="mb-4">
                <p class="pb-2">
                  <strong>Address:</strong>
                </p>
                <a
                  href="https://www.google.com/maps/place/19+Stella+Cove,+Montague+Gardens,+Cape+Town,+7441/@-33.85097,18.5193603,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc5ecc613fcc49:0x28242d00d701dbb9!8m2!3d-33.85097!4d18.5193603?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <p>19 Stella Cove, Montague Gardens</p>
                </a>
                <p>Cape Town, South Africa</p>
              </div>
              <div class="mb-4">
                <p class="pb-2">
                  <strong>Trading Hours:</strong>
                </p>
                <p>Monday – Sunday</p>
                <p>24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t-1 border-[#e0e1e6]/10">
          <p>
            © {currentDate} Roller Shutter Services (Pty) Ltd. All rights
            reserved.
          </p>

          <p>
            Professional roller shutter installations, repairs, servicing and
            maintenance.
          </p>
          <p>
            RSS · <i>"We keep you, rolling."</i>
          </p>
        </div>
      </div>
    </footer>
  );
}
