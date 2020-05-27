import PropTypes from "prop-types"
import React from "react"
import NavBar from "./NavBar"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <Link to="/">
                <h2
                  className="is-size-1"
                  style={{
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {siteTitle}
                </h2>
              </Link>

              <p className="is-size-4">Tiffany Schatz, M.D.</p>
              <p className="is-size-4">Thoracic and General Surgery</p>
              <p className="is-size-4">
                Serving Montgomery and Prince George's Counties
              </p>
            </div>
          </div>
        </div>
        <NavBar siteTitle={siteTitle} />
      </section>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
