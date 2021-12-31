import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Card } from "react-bootstrap"

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
          image
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`

const BlogIndex = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    {data.allMarkdownRemark.nodes.map(n => (
      <Card className="border-0">
        <Card.Body className="px-0">
          <Card.Title>
            <Link style={{ textDecoration: "none" }} to={`/${n.fields.slug}`}>
              {n.frontmatter.title}
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 small text-muted">
            {n.frontmatter.date}
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
