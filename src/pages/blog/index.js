import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

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
        excerpt(pruneLength: 100)
      }
    }
  }
`

const BlogIndex = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    {data.allMarkdownRemark.nodes.map(n => (
      <Link to={`/${n.fields.slug}`}>
        <div
          style={{
            border: "1px solid #888",
            padding: "1rem 0.5rem",
            margin: "2rem 0px",
            borderRadius: "15px",
          }}
        >
          <h3>{n.frontmatter.title}</h3>
          <p>{n.frontmatter.date}</p>
          <p>{n.excerpt}</p>
        </div>
      </Link>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogIndex
