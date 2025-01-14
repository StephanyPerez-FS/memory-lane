import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav
    style={{
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Memory Lane
      </Link>
    </h1>
    <div>
      <Link
        to="/"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
      >
        Home
      </Link>
    </div>
  </nav>
)

export default Navbar
