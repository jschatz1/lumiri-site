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
          <div className="box" style={boxStyle}>
            <h1 className="title">Location</h1>
            <div className="address-wrap">
              <h2 className="title is-4">Address:</h2>
              <div className="address">
                <p>3525 Real st, Las Vegas, OK 36342</p>
              </div>
            </div>
            <div className="number-wrap" style={{ paddingTop: "40px" }}>
              <h2 className="title is-4">Phone:</h2>
              <p>454-545-5434</p>
            </div>
          </div>
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
