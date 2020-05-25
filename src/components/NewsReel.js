import React, { useState, useEffect } from "react"
import RSSParser from "rss-parser"
import Loader from "react-loader-spinner"

export default ({ feed }) => {
  return (
    <div>
      <h2 className="title is-2">Surgical News</h2>
      {feed.map((item, i) => (
        <div className="is-parent tile">
          <div className="is-child tile box">
            <div className="media" key={i}>
              <figure className="media-left">
                <img src={item.media.$.url} alt={item.title} />
              </figure>
              <div className="media-content">
                <div>
                  <a href={item.link}>
                    <h3 className="is-size-3">{item.title}</h3>
                  </a>
                  <small>{item.pubDate}</small>
                  <p className="is-dark is-size-4">{item.contentSnippet}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
