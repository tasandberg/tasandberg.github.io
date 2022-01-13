import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ project }) => {
  const { name, tags, image, website } = project.frontmatter
  return (
    <Card className="border-0 mb-3">
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="mb-3 mb-md-0">
                <GatsbyImage image={getImage(image)} />
              </div>
            </Col>
            <Col>
              <a
                href={website}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{name}</h3>
              </a>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
              <p>Technologies used:</p>
              {tags.map(t => (
                <Badge pill bg="secondary me-2" key={name + t}>
                  {t}
                </Badge>
              ))}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

const ProjectIndex = ({ data }) => (
  <Layout title="Projects">
    {data.allMarkdownRemark.nodes.map(n => (
      <ProjectCard project={n} key={`${n.frontmatter.name}-project-card`} />
    ))}
    <p className="text-muted">
      For hiring inquiries, <Link to="/contact">contact me here</Link>.
    </p>
  </Layout>
)

export default ProjectIndex

// Query
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      nodes {
        frontmatter {
          name
          tags
          website
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        html
        excerpt(pruneLength: 200)
      }
    }
  }
`
