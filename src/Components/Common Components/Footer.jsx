import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Roller Shutter Services Logo" />

            <p>
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
            <h3>Quick Links</h3>

            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
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
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3>Contact</h3>

            <p>
              <strong>Phone:</strong>
            </p>
            <p>(+27) 71 881 3320</p>

            <p>
              <strong>Address:</strong>
            </p>
            <p>19 Stella Cove, Montague Gardens</p>
            <p>Cape Town, South Africa</p>

            <p>
              <strong>Trading Hours:</strong>
            </p>
            <p>Monday – Sunday</p>
            <p>24 Hours</p>
          </div>
        </div>

        <hr />

        <div>
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
