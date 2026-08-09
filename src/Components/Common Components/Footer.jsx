//import logo from "../../assets/logo.png";
import logo from "../../assets/RSS-LOGOS-BLACK-YELLOW.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-[#E0E1E6]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Roller Shutter Services Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#E0E1E6]/60">
              A family-owned business providing professional roller shutter
              solutions throughout Cape Town. From manufacturing and
              installation to repairs and servicing, we deliver reliable
              solutions built to last.
            </p>

            {/* Small brand accent */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F22233]" />
              <span className="text-sm font-medium italic text-[#F2B90F]">
                We keep you rolling.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <nav>
              <ul className="space-y-4 text-sm text-[#E0E1E6]/60">
                <li>
                  <Link
                    to="/"
                    className="transition-colors hover:text-[#F2B90F]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="transition-colors hover:text-[#F2B90F]"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/gallery"
                    className="transition-colors hover:text-[#F2B90F]"
                  >
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blinds"
                    className="transition-colors hover:text-[#F2B90F]"
                  >
                    Blinds
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="transition-colors hover:text-[#F22233]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="space-y-6 text-sm">
              {/* Phone */}
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                  Phone
                </p>

                <a
                  href="tel:+27718813320"
                  className="text-[#E0E1E6]/70 transition-colors hover:text-white"
                >
                  (+27) 71 881 3320
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                  Visit Us
                </p>

                <a
                  href="https://www.google.com/maps/place/19+Stella+Cove,+Montague+Gardens,+Cape+Town,+7441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 text-[#E0E1E6]/70 transition-colors hover:text-white"
                >
                  19 Stella Cove
                  <br />
                  Montague Gardens
                  <br />
                  Cape Town, South Africa
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                  Trading Hours
                </p>

                <p className="text-[#E0E1E6]/70">
                  Monday – Sunday
                  <br />
                  24 Hours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-xs text-[#E0E1E6]/40 sm:flex-row sm:items-center sm:justify-between text-center">
          <p>
            © {currentDate} Roller Shutter Services (Pty) Ltd. All rights
            reserved.
          </p>

          <p className="italic">
            Professional roller shutter solutions you can rely on.
          </p>
        </div>
      </div>
    </footer>
  );
}
