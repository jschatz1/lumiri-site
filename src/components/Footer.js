import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <footer className="hero is-primary">
      <div className="level">
        <p>
          © {new Date().getFullYear()},{` `}Lumiri
        </p>
        <Link>
          <a className="level-left" href="/sitemap.xml">
            sitemap
          </a>
        </Link>
      </div>
    </footer>
  )
}
