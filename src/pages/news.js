import React from "react"
import NewsReel from "../components/NewsReel"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default () => {
  const boxStyle = {
    margin: "20px",
  }
  return (
    <Layout>
      <SEO title="News" />
      <div className="columns">
        <div className="column">
          <NewsReel />
        </div>
      </div>
    </Layout>
  )
}
