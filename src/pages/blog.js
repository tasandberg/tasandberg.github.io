import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card } from "react-bootstrap"

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "LL")
          tags
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`

const BlogIndex = ({ data }) => (
  <Layout title="Blog">
    {data.allMarkdownRemark.nodes.map(n => (
      <Card bg="light border-0">
        <Card.Body className="">
          <Card.Title>
            <Link style={{ textDecoration: "none" }} to={`/${n.fields.slug}`}>
              <h3>{n.frontmatter.title}</h3>
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 small text-muted">
            {n.frontmatter.date}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2">
            {n.frontmatter.tags.map(t => (
              <Badge pill bg="secondary me-2" key={n.frontmatter.title + t}>
                {t}
              </Badge>
            ))}
          </Card.Subtitle>
          <Card.Text>{n.excerpt}</Card.Text>
          <Card.Link className="text-muted" to={`/${n.fields.slug}`} as={Link}>
            Read more...
          </Card.Link>
        </Card.Body>
      </Card>
    ))}
  </Layout>
)

export default BlogIndex
