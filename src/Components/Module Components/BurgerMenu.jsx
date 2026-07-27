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
              <Link to="/" onClick={() => setMenuActive(false)}>
                Home
              </Link>
            </div>

            <div>
              <Link to="/services" onClick={() => setMenuActive(false)}>
                Services
              </Link>
            </div>

            <div>
              <Link to="/blinds" onClick={() => setMenuActive(false)}>
                Blinds
              </Link>
            </div>

            <div>
              <Link to="/gallery" onClick={() => setMenuActive(false)}>
                Gallery
              </Link>
            </div>

            <div>
              <Link to="/contact" onClick={() => setMenuActive(false)}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
