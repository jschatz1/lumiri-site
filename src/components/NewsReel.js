import React, { useState, useEffect } from "react"
import RSSParser from "rss-parser"

export default () => {
  const [feed, setFeed] = useState({ title: "", items: [] })
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
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    rssFeed()
  }, [])

  return (
    <div className="container">
      <h2 className="title is-2">{feed.title}</h2>
      {feed.items.map((item, i) => (
        <div className="box" key={i}>
          <img src={item.media.$.url} alt={item.title} />
          <a href={item.link}>
            <h3 className="title is-3">{item.title}</h3>
            <p>{item.contentSnippet}</p>
          </a>
        </div>
      ))}
    </div>
  )
}
