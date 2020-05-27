import React from "react"

export default () => {
  return (
    <div className="hero is-primary">
      <div className="video contain">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QJR1aodXH20"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
