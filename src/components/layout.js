import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

const Layout = ({ children }) => (
  <div style={{ fontFamily: "Arial, sans-serif" }}>
    <Navbar />
    <main style={{ margin: "20px" }}>{children}</main>
  </div>
)

export default Layout
