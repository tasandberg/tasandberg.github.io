import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card, Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.posts.nodes
  const firstPost = posts[0]

  const Author = ({ date }) => {
    return (
      <Row>
        <Col className="d-flex align-items-center">
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
        </Col>
      </Row>
    )
  }
  return (
    <Layout title="Blog">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <GatsbyImage
              image={getImage(firstPost.frontmatter.cover)}
              className="rounded h-100"
            />
          </Col>
          <Col>
            <h2>{firstPost.frontmatter.title}</h2>
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
          </Col>
        </Row>
        <Row></Row>
        {posts.slice(1).map(n => (
          <Card bg="light border-0 mb-3">
            <Card.Body className="blog-post-preview">
              <Card.Title>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/${n.fields.slug}`}
                >
                  <h3>{n.frontmatter.title}</h3>
                </Link>
              </Card.Title>
              <Card.Subtitle className="small text-muted">
                {n.frontmatter.date}
              </Card.Subtitle>
              <Card.Subtitle>
                {n.frontmatter.tags.map(t => (
                  <Badge pill bg="secondary me-2" key={n.frontmatter.title + t}>
                    {t}
                  </Badge>
                ))}
              </Card.Subtitle>
              <Card.Text>{n.excerpt}</Card.Text>
              <Card.Link
                className="text-muted"
                to={`/${n.fields.slug}`}
                as={Link}
              >
                Read more...
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Layout>
  )
}

export default BlogIndex
