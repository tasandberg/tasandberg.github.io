import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="mx-1 px-sm-0">
        <GatsbyImage
          className="rounded mb-4"
          image={getImage(post.frontmatter.image)}
        />
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <header className="mb-4">
            <h1 className="display-4 ">{post.frontmatter.title}</h1>
            <p className="small text-muted">{post.frontmatter.date}</p>
            <p>
              {post.frontmatter.tags.map(t => (
                <Badge
                  pill
                  bg="secondary me-2"
                  key={post.frontmatter.title + t}
                >
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
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "LL")
        tags
        image {
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
