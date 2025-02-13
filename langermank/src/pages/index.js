import React from 'react';
import { Link, graphql } from 'gatsby';
import classnames from 'clsx';
import Image from '../components/image';
import SEO from '../components/seo';
import styles from '../styles/home.module.scss';
import Layout from '../components/layout';
import Text from '../text/aboutme.mdx';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.aboutKatie}>
        <div className={styles.katieHeadline}>
          <h1>I'm Katie, designer & developer</h1>
        </div>
        <Text/>
        <Image/>
      </section>
      <section className={styles.postsWrap}>
        <h2 className="header1">Tidbits</h2>
        <div className={styles.outerGrid}>
          <span></span>
          <div className={styles.blogPosts}>
            <span className={styles.headerWrap}>
              <h3>here</h3>
            </span>
            <ul className={styles.internal}>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                  <time>{post.frontmatter.date}</time>
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
        <div className={styles.outerGrid}>
          <span></span>
          <div className={classnames(styles.blogPosts, styles.externalPosts)}>
            <span className={styles.headerWrap}>
              <h3>&there</h3>
            </span>
            <ul className={styles.external}>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=SjOieV8seec"
                  target="_blank"
                  rel="noopener noreferrer">
                  Invisible infrastructure: How we shipped new color tokens
                without breaking GitHub
                  <span className={styles.customDate}>
                    GitHub X Figma Config Day 0
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=LN6dGGBfDYs&t=5s"
                  target="_blank"
                  rel="noopener noreferrer">
                  Async/Await: Close collaboration across non-overlapping time
                zones
                  <span className={styles.customDate}>
                    GitHub LGTM Conf
                  </span>
                </a>
              </li>
            <li>
              <a
                href="https://spaces.is/loversmagazine/interviews/katie-langerman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lover's Magazine interview
              </a>
              </li>
              <li>
              <a
                href="https://www.youtube.com/watch?v=AtYyOGmOZkc&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer">
                  justify-yourself: space-between
                  <span className={styles.customDate}>
                    Boston CSS Meetup<span aria-hidden="true" className={styles.bullet}> · </span>
                    <time>October 4, 2019</time>
                  </span>
                </a>
            </li>
          </ul>
          </div>
        </div>
      </section>

      {/* <section className={styles.projectsWrap}>
        <h2 className="">Side projects</h2>
        <div className={styles.projectSubGrid}>
          <h3 className="header4">Reality Stock Watch</h3>
          <div className={styles.projectLinks}>
            <a href="https://github.com/Stock-Watch-App/Stockwatch" target="_blank"
              rel="noopener noreferrer">github</a>
            <a href="https://realitystockwatch.com/" target="_blank"
              rel="noopener noreferrer">site</a>
          </div>
          <a href="https://realitystockwatch.com/" target="_blank" rel="noopener noreferrer" className={styles.imageOne}>
            <Img fluid={data.imageOne.childImageSharp.fluid} alt="Stock Watch landing page" />
          </a>
          <p>The Stock Watch is a virtual stock market game for Big Brother created by <a href="https://twitter.com/ArmstrongTaran" target="_blank" rel="noopener noreferrer">Taran Armstrong</a>. Partnering with a full stack engineer, I designed and implemented the front-end of the app built with Laravel and Vue. Over 7,000 users buy/sell mock stocks and rank on the leaderboard each week during Big Brother seasons.</p>
        </div>
        <div className={styles.projectSubGrid}>
          <h3 className="header4">Ladies that UX Boston</h3>
          <div className={styles.projectLinks}>
            <a href="https://github.com/ladies-that-ux-boston/ladiesthatuxboston" target="_blank"
              rel="noopener noreferrer">github</a>
            <a href="https://ladiesthatuxboston.com/" target="_blank"
              rel="noopener noreferrer">site</a>
          </div>
          <a href="https://ladiesthatuxboston.com/" target="_blank" rel="noopener noreferrer" className={styles.imageOne}>
            <Img fluid={data.imageTwo.childImageSharp.fluid} alt="Ladies that UX Boston landing page" />
          </a>
          <p>As one of the co-organizers of the Boston chapter of Ladies that UX, I designed and implemented a simple Gatsby site for our meetup group. Our landing page includes a Medium feed featuring our monthly #WCW posts.</p>
        </div>
      </section> */}
    </Layout>
  )
};

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    imageOne: file(relativePath: { eq: "stockwatch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "ltux.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage;
