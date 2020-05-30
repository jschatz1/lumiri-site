import React from "react"
import docLogo from "../../images/doccommunity.png"
import glennLogo from "../../images/glenecho.png"
import ummsLogo from "../../images/ummslogo.svg"
import adventistLogo from "../../images/adventist-logo.svg"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => {
  const imageStyle = {
    width: "256px",
    height: "auto",
    borderRadius: "5px",
  }
  const imageStyleDark = {
    width: "256px",
    height: "auto",
    background: "rgba(0,0,0,.7)",
    borderRadius: "5px",
  }
  return (
    <Layout>
      <div className="section contain">
        <SEO title="hospitals" />
        <h2 className="title is-3 has-text-centered">Hospitals</h2>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <h2 className="is-size-3">Currently Serving:</h2>

            <article className="tile is-child">
              <a href="https://www.dchweb.org/">
                <h3 className="is-size-4">Doctors Community Hospital</h3>
                <img
                  src={docLogo}
                  alt="Doctors Community Logo"
                  style={imageStyle}
                />
              </a>
            </article>

            <article className="tile is-child">
              <a href="https://glenechosc.com/">
                <h3 className="is-size-4">Glenn Echo Surgery Center</h3>
                <img
                  src={glennLogo}
                  alt="Glenn Echo Logo"
                  style={imageStyleDark}
                />
              </a>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <h2 className="is-size-3">Coming soon:</h2>

            <article className="tile is-child">
              <a href="https://www.adventisthealthcare.com/locations/profile/white-oak-medical-center/?utm_source=local-listing&utm_medium=organic&utm_campaign=website-link">
                <h3 className="is-size-4">
                  Adventist White Oak Medical Center
                </h3>
                <img
                  src={adventistLogo}
                  alt="Adventist Logo"
                  style={imageStyle}
                />
              </a>
            </article>
            <article className="tile is-child">
              <a href="https://www.umms.org/capital">
                <h3 className="is-size-4">
                  University of Maryland Capitol Regional Health
                </h3>
                <img src={ummsLogo} alt="Umms Logo" style={imageStyle} />
              </a>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}
