import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "workHistory" } } }
    ) {
      nodes {
        frontmatter {
          employer
          start_date(formatString: "LL")
          end_date(formatString: "LL")
          technologies
          image {
            childImageSharp {
              gatsbyImageData(width: 100, placeholder: BLURRED)
            }
          }
        }
        html
        excerpt(pruneLength: 200)
      }
    }
  }
`

const WorkCard = ({ work }) => {
  const { employer, start_date, end_date, technologies, image } =
    work.frontmatter
  return (
    <div>
      <Card className="border-0">
        <Card.Body>
          <Row>
            <Col xs={true} className="d-flex justify-content-end p-0">
              <div>
                <GatsbyImage objectFit="cover" image={getImage(image)} />
              </div>
            </Col>
            <Col xs={10}>
              <Card.Title>
                <h3>{employer}</h3>
              </Card.Title>
              <Card.Subtitle>
                <p className="text-muted">
                  {start_date} - {end_date}
                </p>
              </Card.Subtitle>
              <div dangerouslySetInnerHTML={{ __html: work.html }} />
              <p>Technologies used:</p>
              {technologies.map(t => (
                <Badge pill bg="secondary me-2" key={employer + t}>
                  {t}
                </Badge>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

const Work = ({ data }) => (
  <Layout title="Work">
    {data.allMarkdownRemark.nodes.map(n => (
      <WorkCard work={n} key={`${n.frontmatter.name}-project-card`} />
    ))}
  </Layout>
)

export default Work
