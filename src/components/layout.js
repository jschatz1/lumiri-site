import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
