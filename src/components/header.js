import React from "react"
import { Link } from "gatsby"
import doc from "../images/doc.jpg"

const Header = () => {
  return (
    <>
      <section
        className="hero"
        style={{
          background: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3) ), url(${doc})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-body">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <Link to="/">
                <h1
                  className="title has-text-primary is-1"
                  style={{
                    paddingLeft: "1rem",

                    paddingRight: "1rem",
                    fontSize: "75px",
                    fontWeight: "bold",
                    whiteSpace: "normal",
                    textShadow: "1px 1px black",
                  }}
                >
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
