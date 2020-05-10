import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default () => {
  const boxStyle = {
    margin: "20px",
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="columns">
        <div className="column">
          <div className="box" style={boxStyle}></div>
        </div>
        <div className="column">
          <div className="box" style={boxStyle}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
