import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

const NavBar = ({ siteTitle }) => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <nav
      className="navbar primary is-bold"
      role="navigation"
      aria-label="main navigation"
      style={{ paddingRight: "20px" }}
    >
      <div
        className="navbar-brand"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="lumiri logo"
            style={{ width: "50px", paddingTop: "15px" }}
          ></img>
        </Link>

        <div
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="about">
              About
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="about/drschatz">
                About Dr. Tiffany Schatz
              </Link>
              <Link className="navbar-item" to="about">
                About Lumiri Surgical
              </Link>
              <Link className="navbar-item" to="about/specialties">
                Subspecialties and Areas of Clinical Concentration
              </Link>
              <Link className="navbar-item" to="about/hospitals">
                Hospitals We Serve
              </Link>
              <Link className="navbar-item" to="about/media">
                Press and Media
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="patientinfo">
              Patient Information
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="patientinfo/prepare">
                Preparing for Surgery
              </Link>
              <Link className="navbar-item" to="patientinfo/documents">
                Documents
              </Link>
              <Link className="navbar-item" to="patientinfo/telemedicine">
                Telemedicine Call
              </Link>
              <Link className="navbar-item" to="news">
                Surgery News Feed
              </Link>
            </div>
          </div>

          <Link className="navbar-item" to="contact">
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <div
            className="buttons navbar-end navbar-item"
            style={{ marginBottom: "-10px" }}
          >
            <a href="https://patientally.com" className="button is-primary">
              <strong type="button">Patient Portal</strong>
            </a>
          </div>
          <a
            href="https://www.facebook.com/TiffanySchatzMD/"
            className="navbar-item"
          >
            <FontAwesomeIcon size="lg" icon={faFacebook} />
          </a>

          <a href="https://twitter.com/tschatzmd" className="navbar-item">
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
