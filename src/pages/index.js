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
    <h1>Hi</h1>
    <p>
      Hi! I'm a freelance software engineer based in Oakland, CA. This site is
      my repository for all things coding and programming, though I mostly focus
      on full stack web development.{" "}
      <Link to="/about">More about that here</Link>.
    </p>
    <h1>Work</h1>
    <h2></h2>
  </Layout>
)

export default IndexPage
