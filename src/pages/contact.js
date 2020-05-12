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
            <div className="level">
              <h2 className="title is-4 level-left">Address:</h2>
              <div className="level-right">
                <p>3525 Real st</p>
                <p>Las Vegas, OK 36342</p>
              </div>
            </div>
            <h2 className="title is-4">Phone:</h2>
            <p>454-545-5454</p>
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
