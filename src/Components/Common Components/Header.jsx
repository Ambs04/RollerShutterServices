import logo from "../../assets/logo.png";
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
      <div>
        {!(isMobileView && menuActive) && (
          <div>
            <div>
              <img src={logo} />
            </div>

            {!isMobileView && (
              <nav>
                <a href="#home">Home</a>
                <Link to="/blinds">Blinds</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>

                <a href="#contact">Contact Us </a>
              </nav>
            )}

            {isMobileView && (
              <button onClick={() => setMenuActive(true)}>☰</button>
            )}
          </div>
        )}

        {isMobileView && menuActive && (
          <BurgerMenu setMenuActive={setMenuActive} />
        )}
      </div>
    </header>
  );
}
