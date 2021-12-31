import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Row>
      <Col>
        <div className="d-flex">
          <div className="flex-shrink-0 justify-content-center">
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
          <div className="flex-grow-1 ms-3">
            <p>
              <strong className="font-monospace">Hello world!</strong>
            </p>
            <p>
              My name is Tim Sandberg. I'm a freelance software engineer based
              in Oakland, CA. This site is my repository for all things coding
              and programming. I'm primarily a full-stack web developer, but I
              also dabble in game development and IoT hardware projects.
            </p>
            <p>
              I'm also a musician and{" "}
              <a href="https://timsandberg.com">film composer</a>.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
