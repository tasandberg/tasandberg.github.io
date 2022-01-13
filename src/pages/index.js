import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Row className="mt-5">
        <Col
          xs={12}
          md={3}
          className="justify-content-center flex-direction-row justify-content-md-end d-flex mb-3 mb-md-0"
        >
          <div>
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
        </Col>
        <Col>
          <p className="text-center text-md-start">
            <strong className="font-monospace">Hello world!</strong>
          </p>
          <p>
            My name is Tim Sandberg. I'm a freelance software engineer based in
            Oakland, CA. This site is my repository for all things coding and
            programming. I'm primarily a full-stack web developer, but I also
            dabble in game development and IoT hardware projects. Down to
            collaborate!
          </p>
          <p>
            I'm also a musician and{" "}
            <a href="https://timsandberg.com">film composer</a>.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
