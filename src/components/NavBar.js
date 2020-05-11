import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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

        <a
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
        </a>
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
            <a className="navbar-link">Patient Information</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="patientinfo">
                Insurance
              </Link>
              <Link className="navbar-item" to="patientinfo">
                Documents
              </Link>
              <Link className="navbar-item" to="patientinfo">
                Patient Portal
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="faq">
            FAQ
          </Link>
          <Link className="navbar-item" to="contact">
            Contact
          </Link>
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
