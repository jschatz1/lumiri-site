import React from "react"
import VideoHero from "../../components/VideoHero"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Media = () => {
  return (
    <Layout>
      <div className="section contain">
        <SEO title="media" />
        <h2 className="title is-2">Articles and Media</h2>
      </div>
      <VideoHero />
    </Layout>
  )
}

export default Media
