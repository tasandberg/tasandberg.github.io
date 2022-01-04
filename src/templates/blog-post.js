import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge } from "react-bootstrap"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p className="small text-muted">{post.frontmatter.date}</p>

          <p>
            {post.frontmatter.tags.map(t => (
              <Badge pill bg="secondary me-2" key={post.frontmatter.title + t}>
                {t}
              </Badge>
            ))}
          </p>
        </header>
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <p>
          <Link to="/blog">← Blog home</Link>
        </p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "LL")
        tags
        image {
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
