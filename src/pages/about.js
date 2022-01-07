import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Figure } from "react-bootstrap"
import { Link } from "gatsby"

const SecondPage = () => (
  <Layout title="About">
    <p>
      <small>
        <i>Warning: insufferable third-persion bio incoming</i>
      </small>
    </p>
    <p>
      Tim (he/him) is a senior software engineer, primarily focused on
      full-stack web technologies like Ruby on Rails, Reactjs, React-Native, and
      various DevOps tools like docker and CI pipelines. He's also been accused
      of having an eye for design, and some skill with CSS3.
    </p>
    <p>
      More about Tim's work history <Link to="/work">here</Link>.
    </p>
    <p>
      When he's not coding, Tim is usually making music. These days he is
      focused on composing music for film and other media. Check that out{" "}
      <a href="https://timsandberg.com">here</a>. He goes wilderness backpacking
      a few times a year and enjoys photography. Sometimes sometimes he develops
      his own film:
    </p>
    <Figure>
      <StaticImage
        className="figure-img img-fluid rounded"
        src="../images/tim-film.jpg"
        alt="Man with strange hat standing in the woods"
      />
      <Figure.Caption>
        This one taken by Tim's daughter, what a natural!
      </Figure.Caption>
    </Figure>
    <p>He lives in Oakland, CA with his partner and daughter.</p>
    <p>
      <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default SecondPage
