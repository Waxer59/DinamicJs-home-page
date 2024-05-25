import { Link } from 'react-scroll'
import './styles/NavbarStyles.css'

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <h1 className="nav-logo">
          Dinamic<strong>Js</strong>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="about-section" smooth={true} duration={100}>
              About
            </Link>
          </li>
          <li>
            <Link to="download-section" smooth={true} duration={100}>
              Download
            </Link>
          </li>
          <li>
            <Link to="footer-section" smooth={true} duration={100}>
              Author
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
