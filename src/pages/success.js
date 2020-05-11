import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => {
  return (
    <Layout>
      <div className="container">
        <SEO title="success" />
        <h1 className="title is-1">Your message was sent!</h1>
        <h4 className="subtitle is-4">We will be in touch soon!</h4>
      </div>
    </Layout>
  )
}

export default Success
