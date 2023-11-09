import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

export const query = graphql`{
  posts: allMarkdownRemark(
    filter: {fields: {collection: {eq: "blog"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "LL")
        tags
        cover: image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        square: image {
          childImageSharp {
            gatsbyImageData(width: 300, height: 300)
          }
        }
      }
      excerpt(pruneLength: 100)
    }
  }
}`

const BlogIndex = ({ data }) => {
  const posts = data.posts.nodes
  const firstPost = posts[0]

  const Author = ({ date }) => {
    return (
      <Row>
        <Col className="">
          <Link
            to="/about"
            className="d-flex align-items-center text-dark"
            style={{ textDecoration: "none" }}
          >
            <StaticImage
              style={{ borderRadius: "50%" }}
              className="me-1"
              height={30}
              width={30}
              src="../images/author.png"
            />
            <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
              By: Tim
              <small className="text-muted" style={{ marginTop: "-5px" }}>
                {date}
              </small>
            </div>
          </Link>
        </Col>
      </Row>
    )
  }
  return (
    <Layout title="Blog">
      <Container fluid className="p-0">
        <h2>Blog</h2>
        <p className="text-muted mb-4">
          Tutorials, bug fixes, and other thoughts on development.
        </p>
        <Row className="mb-5">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Link to={"/" + firstPost.fields.slug}>
              <GatsbyImage
                image={getImage(firstPost.frontmatter.cover)}
                alt="Cover photo for the first blog post"
                className="rounded h-100"
              />
            </Link>
          </Col>
          <Col>
            <div className="px-2">
              <h2 className="display-6">{firstPost.frontmatter.title}</h2>
              <p className="text-muted">
                <small>
                  {firstPost.excerpt}
                  <br />
                  <Link to={firstPost.fields.slug}>Read more</Link>
                </small>
              </p>
              <p>
                <Author date={firstPost.frontmatter.date} />
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {posts.slice(1).map(n => (
            <Col xs={12} md={4} className="mb-4 mb-md-0">
              <Row>
                <Col xs={3} md={12}>
                  <div className="h-100">
                    <Link to={"/" + n.fields.slug}>
                      <GatsbyImage
                        image={getImage(n.frontmatter.square)}
                        alt="Cover photo for the first blog post"
                        className="rounded mb-3"
                      />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <h5 className="display-6 fs-4">{n.frontmatter.title}</h5>
                  <p className="text-muted">
                    <small>
                      {n.excerpt}
                      <br />
                      <Link to={"/" + n.fields.slug}>Read more</Link>
                    </small>
                  </p>
                  <p>
                    <Author date={n.frontmatter.date} />
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogIndex
