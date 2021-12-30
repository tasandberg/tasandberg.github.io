import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      <StaticImage
        src="../images/profile-pic.jpg"
        alt="Profile picture"
        layout="fixed"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
        formats={["auto", "webp", "avif"]}
      />
    </div>
    <p>
      Hi! I'm a freelance software engineer, musician, and film composer based
      in Oakland, CA. This site is a repository for all things coding and
      development related.
    </p>
  </Layout>
)

export default IndexPage
