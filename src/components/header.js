import React from "react"
import { Link } from "gatsby"
import doc from "../images/hero.jpg"

const Header = () => {
  const heroBackground = {
    background: `linear-gradient( rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3) ), url(${doc})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "125%",
    height: "300px",
  }
  const heroTitle = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "8vw",
    fontWeight: "bold",
    whiteSpace: "normal",
    textShadow: "1px 1px black",
  }
  return (
    <>
      <section className="hero" style={heroBackground}>
        <div className="hero-body">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <Link to="/">
                <h1 className="title has-text-primary is-1" style={heroTitle}>
                  Lumiri Surgical
                </h1>
              </Link>
              <p className="is-size-3">Tiffany Schatz, M.D.</p>
              <p className="is-size-3">Thoracic and General Surgery</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
