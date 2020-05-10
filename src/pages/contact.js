import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
