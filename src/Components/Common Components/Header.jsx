//import logo from "../../assets/logo.png";
import logo from "../../assets/RSS-LOGOS-BLACK-YELLOW.svg";
import { useState } from "react";
import WindowSize from "../../Helper Functions/WindowSize";
import BurgerMenu from "../Module Components/BurgerMenu";
import { Link } from "react-router-dom";

export default function Header() {
  const { width } = WindowSize();
  const [menuActive, setMenuActive] = useState(false);

  const isMobileView = width < 768;

  return (
    <header>
      <div
        class="fixed z-50 top-0 right-0 left-0 py-5  bg-[#0D0D0D]/90
backdrop-blur-md
border-b border-white/5"
      >
        <div class=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!(isMobileView && menuActive) && (
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-row items-center gap-2">
                <Link to="/">
                  <img src={logo} class="w-14 h-14" />
                </Link>
              </div>

              {!isMobileView && (
                <nav class="text-[#e0e1e6] text-lg flex flex-row gap-8 font-medium text-center items-center transition-all">
                  <Link
                    to="/"
                    class="hover:text-[#F2B90F] hover:text-lg hover:font-semibold"
                  >
                    Home
                  </Link>

                  <Link
                    to="/services"
                    class="hover:text-[#F2B90F] hover:text-lg hover:font-semibold"
                  >
                    Services
                  </Link>
                  <Link
                    to="/blinds"
                    class="hover:text-[#F2B90F] hover:text-lg hover:font-semibold"
                  >
                    Blinds
                  </Link>
                  <Link
                    to="/gallery"
                    class="hover:text-[#F2B90F] hover:text-lg hover:font-semibold"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/contact"
                    class="bg-[#a91419] px-3 rounded-xl py-2 hover:bg-[#D71920]"
                  >
                    Contact Us{" "}
                  </Link>
                </nav>
              )}

              {isMobileView && (
                <button
                  onClick={() => setMenuActive(true)}
                  class="text-[#e0e1e6] text-xl"
                >
                  ☰
                </button>
              )}
            </div>
          )}

          {isMobileView && menuActive && (
            <BurgerMenu setMenuActive={setMenuActive} />
          )}
        </div>
      </div>
    </header>
  );
}
