//import logo from "../../assets/logo.png";
import logo from "../../assets/RSS-LOGOS-BLACK-YELLOW.svg";
import { Link } from "react-router-dom";

export default function BurgerMenu({ setMenuActive }) {
  return (
    <nav class="absolute top-0 right-0 left-0 py-3 bg-[#0d0d0d] z-50">
      <div class=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div>
          <div class="flex flex-row items-center justify-between py-2 mb-3">
            <Link to="/">
              <img src={logo} class="w-12 h-12" />
            </Link>

            <button
              onClick={() => setMenuActive(false)}
              class="text-[#e0e1e6] hover:text-[#F22233] hover:font-semibold hover:text-lg "
            >
              ✕
            </button>
          </div>

          <div class="text-[#e0e1e6] text-sm flex flex-col  font-medium  gap-8 space-y-2 ">
            <div class="hover:text-[#F2B90F] hover:font-semibold">
              <Link to="/" onClick={() => setMenuActive(false)}>
                Home
              </Link>
            </div>

            <div class="hover:text-[#F2B90F]  hover:font-semibold">
              <Link to="/services" onClick={() => setMenuActive(false)}>
                Services
              </Link>
            </div>

            <div class="hover:text-[#F2B90F]  hover:font-semibold">
              <Link to="/blinds" onClick={() => setMenuActive(false)}>
                Blinds
              </Link>
            </div>

            <div class="hover:text-[#F2B90F]  hover:font-semibold">
              <Link to="/gallery" onClick={() => setMenuActive(false)}>
                Gallery
              </Link>
            </div>

            <div class=" bg-[#a91419] px-3 rounded-lg py-4 hover:bg-[#D71920] w-full ">
              <Link to="/contact" onClick={() => setMenuActive(false)}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
