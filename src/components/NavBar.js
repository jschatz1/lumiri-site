import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const NavBar = ({ siteTitle }) => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <nav
      className="navbar primary is-bold"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <h2
            className="is-size-1"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            {siteTitle}
          </h2>
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
          <Link className="navbar-item" to="about">
            About
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="patientinfo">
              Patient Information
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="patientinfo/insurance">
                Insurance
              </Link>
              <Link className="navbar-item" to="patientinfo">
                Documents
              </Link>
              <Link className="navbar-item" to="patientinfo/procedures">
                Skills & Procedures
              </Link>
              <a className="navbar-item" href="https://patientally.com">
                Patient Portal
              </a>
            </div>
          </div>
          <Link className="navbar-item" to="faq">
            FAQ
          </Link>
          <Link className="navbar-item" to="contact">
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <div
            className="buttons navbar-end navbar-item"
            style={{ marginBottom: "-10px" }}
          >
            <Link to="/news" className="button is-primary is-inverted">
              <strong type="button">In The News</strong>
            </Link>
          </div>
          <a href="https://facebook.com" className="navbar-item">
            <FontAwesomeIcon size="lg" icon={faFacebook} />
          </a>
          <a href="https://instagram.com" className="navbar-item">
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </a>
          <a href="https://twitter.com" className="navbar-item">
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
