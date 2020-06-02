import React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import Footer from "./Footer"
import NavBar from "./NavBar"
import "./styles.scss"

config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        <main style={{ minHeight: "800px" }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
