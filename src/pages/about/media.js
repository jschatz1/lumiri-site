import React from "react"
import cancerReportImg from "../../images/cancerreportimage.png"
import cancerReport from "../../documents/cancer_annual_report2018.pdf"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Media = () => {
  return (
    <Layout>
      <div className="section contain">
        <SEO title="media" />
        <h2 className="title is-2 has-text-centered">Articles and Media</h2>
      </div>
      <div className="hero">
        <div className="mediaBox box">
          <h2 className="is-size-4 has-text-centered">
            Watch Dr. Schatz on Sisters4Fitness
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QJR1aodXH20"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="hero">
        <div className="mediaBox box" sty>
          <div>
            <h2 className="is-size-4 has-text-centered">
              Read Doctors Community Health System's Cancer Annual Report
              featuring Dr. Schatz
            </h2>{" "}
            <a
              className="is-size-5 has-text-centered"
              href={cancerReport}
              target="_blank"
            >
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "50%",
                  height: "auto",
                }}
                src={cancerReportImg}
                alt="image of report cover"
              />
              <p className="is-size-5 has-text-centered">Click to view</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Media
