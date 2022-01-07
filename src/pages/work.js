import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "workHistory" } } }
      sort: { fields: frontmatter___start_date, order: DESC }
    ) {
      nodes {
        frontmatter {
          employer
          employer_url
          start_date(formatString: "MMMM YYYY")
          end_date(formatString: "MMMM YYYY")
          job_title
          technologies
          image {
            childImageSharp {
              gatsbyImageData(width: 70, placeholder: BLURRED)
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
  const {
    employer,
    employer_url,
    job_title,
    start_date,
    end_date,
    technologies,
    image,
  } = work.frontmatter
  return (
    <div>
      <Card className="border-0 mb-3">
        <Card.Body>
          <Row>
            <Col xs={true} className="d-flex justify-content-end">
              <div>
                <GatsbyImage objectFit="cover" image={getImage(image)} />
              </div>
            </Col>
            <Col xs={10}>
              <div>
                <a className="fs-5" href={employer_url}>
                  {employer}
                </a>
              </div>
              <div>{job_title}</div>
              <p className="text-muted">
                {start_date} - {end_date || `Present`}
              </p>
              <div dangerouslySetInnerHTML={{ __html: work.html }} />
              <p className="mb-0">Technologies used:</p>
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
