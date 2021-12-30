import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const links = [
  { text: "projects", to: "/projects" },
  { text: "about", to: "/about" },
  { text: "hire", to: "/hire" },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ margin: 0, flex: 2 }}>
        <Link
          to="/"
          className="brand-link"
          style={{
            textDecoration: `none`,
            color: "black",
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Link to="/page-2/">about</Link> <br />
        <Link to="/using-typescript/">hire me</Link> <br />
        <Link to="/using-ssr">projects</Link> <br />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
