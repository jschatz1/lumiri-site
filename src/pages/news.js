import React, { useState, useEffect } from "react"
import RSSParser from "rss-parser"
import Loader from "react-loader-spinner"
import NewsReel from "../components/NewsReel"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const [feed, setFeed] = useState({ title: "", items: [] })
  const [loading, setLoading] = useState(true)
  const rssFeed = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser({
      customFields: {
        item: [["media:thumbnail", "media"]],
      },
    })
    try {
      const feed = await parser.parseURL(
        `${CORS_PROXY}https://medicalxpress.com/rss-feed/breaking/surgery-news/`
      )
      setFeed(feed)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    rssFeed()
  }, [])

  return (
    <Layout>
      <SEO title="News" />
      <div className="section contain">
        {loading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            style={{ position: "absolute", right: "40%", bottom: "50%" }}
          />
        ) : (
          ""
        )}
        <div
          className="tile is-ancestor is-vertical"
          style={{ minHeight: "800px" }}
        >
          <NewsReel feed={feed.items} />
        </div>
      </div>
    </Layout>
  )
}
