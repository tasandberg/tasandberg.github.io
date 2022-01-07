/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Seo from "./seo"
import "../styles/bootstrap.scss"
import "../styles/prism-theme.css"
import "../styles/blog.scss"
import { Container } from "react-bootstrap"

const Layout = ({ children, title }) => {
  return (
    <div
      style={{
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Header />
      <Seo title={title} />
      <main>
        <div
          className="pt-2 pt-lg-3 mx-auto px-2"
          style={{ maxWidth: "680px" }}
        >
          <h2>{title}</h2>
          {children}
        </div>
      </main>

      <footer className="footer mt-auto py-3">
        <Container className="text-center">
          <div>
            © 2021-{new Date().getFullYear()} Tim Sandberg. Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>.
          </div>
        </Container>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
