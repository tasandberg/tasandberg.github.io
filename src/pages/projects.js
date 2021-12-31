import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      nodes {
        frontmatter {
          name
          date(formatString: "LL")
          technologies
          image {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
        html
        excerpt(pruneLength: 200)
      }
    }
  }
`

const ProjectCard = ({ project }) => {
  const { name, data, technologies, image } = project.frontmatter
  return (
    <div>
      <Card className="border-0">
        <Card.Body>
          <Container>
            <Row>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <GatsbyImage image={getImage(image)} />
              </Col>
              <Col>
                <h3>{name}</h3>
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
                {technologies.map(t => (
                  <Badge pill bg="secondary me-2" key={name + t}>
                    {t}
                  </Badge>
                ))}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

const ProjectIndex = ({ data }) => (
  <Layout title="Projects">
    {data.allMarkdownRemark.nodes.map(n => (
      <ProjectCard project={n} key={`${n.frontmatter.name}-project-card`} />
    ))}
  </Layout>
)

export default ProjectIndex
