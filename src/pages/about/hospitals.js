import React from "react"
import gvhLogo from "../../images/gvh.png";
import nazarethLogo from "../../images/nazareth.jpg";
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => {
  const imageStyle = {
    width: "200px",
    height: "auto",
    borderRadius: "5px",
  }
  const imageStyleDark = {
    width: "200px",
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
              <a href="https://www.gvh.org/">
                <h3 className="is-size-4">Grand View Health</h3>
                <img
                  src={gvhLogo}
                  alt="Doctors Community Logo"
                  style={imageStyle}
                />
              </a>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <h2 className="is-size-3">Coming soon:</h2>

            <article className="tile is-child">
              <a href="https://www.trinityhealthma.org/location/nazareth-hospital/">
                <h3 className="is-size-4">Nazareth Hospital</h3>
                <img
                  src={nazarethLogo}
                  alt="Adventist Logo"
                  style={imageStyle}
                />
              </a>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}
