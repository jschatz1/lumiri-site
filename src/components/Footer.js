import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

export default () => {
  return (
    <footer style={{ borderTop: "1px solid grey" }}>
      <div className="hero" style={{ padding: " 15px 100px 15px 100px " }}>
        <div className="columns">
          <div className="column">
            <aside className="menu ">
              <ul className="menu-list">
                <p className="menu-label is-size-5"> About </p>
                <Link to="/about">
                  <li>About Lumiri</li>
                </Link>
                <Link to="/about/drschatz">
                  <li>About Dr. Tiffany Schatz</li>
                </Link>
                <Link to="/about/specialties">
                  <li>Subspecialties and Clinical Concentrations</li>
                </Link>
                <Link to="/about/hospitals">
                  <li>Hospitals We Serve</li>
                </Link>
                <Link to="/about/media">
                  <li>Articles and Media</li>
                </Link>
              </ul>
            </aside>
          </div>
          <div className="column">
            {" "}
            <aside className="menu ">
              <ul className="menu-list">
                <p className="menu-label is-size-5"> Patient Info </p>
                <Link to="/patientinfo/prepare">
                  <li>Preparing for Surgery</li>
                </Link>
                <Link to="/patientinfo/documents">
                  <li>Documents</li>
                </Link>
                <Link to="/patientinfo/telemedicine">
                  <li>Telemedicine Call</li>
                </Link>
                <Link to="/news">
                  <li>Surgery News Feed</li>
                </Link>
              </ul>
            </aside>
          </div>
          <div className="column">
            <div className="contain is-pulled-right">
              <Link to="/">
                <img src={logo} alt="lumiri logo" />
              </Link>
            </div>
          </div>
          <div className="column">
            <aside className="menu is-pulled-right">
              <h5 className="menu-label is-size-5">Lumiri Surgical LLC.</h5>
              <ul className="menu-list">
                <li>
                  <a href="https://goo.gl/maps/ZZBcm28HgATFGErp6">
                    <p>5550 Friendship Blvd Suite 360</p>
                    <p> Chevy Chase, MD 20815</p>
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/oBtzp5J6MsVbQ3s17">
                    <p>8116 Goodluck Rd. Suite 215</p>
                    <p> Lanham, MD 20607</p>
                  </a>
                </li>
                <li>
                  <a href="tel:(240) 241-0420">Phone: (240) 241-0420</a>
                </li>
                <li>
                  <a
                    href="tel:(862)
                    298-0732"
                  >
                    Fax: (862) 298-0732
                  </a>
                </li>
              </ul>
              <Link to="/contact">
                <button className="button is-primary is-fullwidth">
                  Contact Us
                </button>
              </Link>
            </aside>
          </div>
        </div>
      </div>
      <div className="hero is-primary" style={{ padding: "10px" }}>
        <div className="level">
          <p>
            © {new Date().getFullYear()},{` `}Lumiri
          </p>
          <Link to="/sitemap.xml" style={{ color: "white" }}>
            <p className="level-left">sitemap</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
