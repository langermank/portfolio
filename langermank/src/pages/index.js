import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "../styles/home.module.scss"

const IndexPage = props => (
  <Fragment>
  <header>
    <h1>Katie Langerman</h1>
    <span className={styles.navLinksWrap}>
      <a href="mailto:langermank@gmail.com" alt="email katie">langermank@gmail.com</a>
      <span className={styles.navLinks}>
        <a href="https://www.linkedin.com/in/langermank/" alt="linkedin">linkedin</a>
        <a href="https://twitter.com/KatieLangerman" alt="twitter">twitter</a>
        <a href="https://github.com/langermank" alt="github">github</a>
        <a href="https://dribbble.com/katielangerman" alt="dribbble">dribbble</a>
      </span>
    </span>
  </header>
  <main>
    <SEO title="Home" />
    <div className={styles.aboutKatie}>
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <p>
        Katie is a Senior UI/UX Engineer at <a href="https://careers.cargurus.com/">CarGurus</a> and a co-organizer
        of <a href="https://www.meetup.com/Ladies-That-UX-Boston/">Ladies that UX Boston</a>, a meetup group empowering women who work in design and technology. With a background in Graphic Design, she both designs and develops products that are performant and user friendly. She’s passionate about connecting engineering to design through the magic of CSS. Currently, she's nerding out over design systems and reusable components.
      </p>
    </div>
    <div className={styles.moreThings}>meat and potatoes</div>
    <footer>Hello</footer>
  </main>
  </Fragment>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "katie-langerman.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  },
`

export default IndexPage
