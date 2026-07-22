import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function BurgerMenu({ setMenuActive }) {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={logo} />

            <button onClick={() => setMenuActive(false)}>✕</button>
          </div>

          <div>
            <div>
              <a href="#home" onClick={() => setMenuActive(false)}>
                Home
              </a>
            </div>

            <div>
              <Link to="/blinds" onClick={() => setMenuActive(false)}>
                Blinds
              </Link>
            </div>

            <div>
              <Link to="/services" onClick={() => setMenuActive(false)}>
                Services
              </Link>
            </div>

            <div>
              <Link to="/gallery" onClick={() => setMenuActive(false)}>
                Gallery
              </Link>
            </div>

            <div>
              <a href="#contact" onClick={() => setMenuActive(false)}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
