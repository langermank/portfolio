/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import SEO from '../components/seo';
import styles from '../styles/home.module.scss';
import Layout from '../components/layout';
import Text from '../text/aboutme.mdx';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.aboutKatie}>
        <div className={styles.katieHeadline}>
          <h1>I'm Katie, designer & developer</h1>
        </div>
        <Image />
        <Text/>
      </section>
      <section className={styles.postsWrap}>
        <h1>Tidbits</h1>
        <div className={styles.posts}>
          <h2>Here</h2>
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
          <h2>Somewhere Else</h2>
          <ul className={styles.external}>
            <li>
              <a
                href="https://xd.adobe.com/ideas/perspectives/interviews/critical-role-ux-generalist-hybrid-designer/"
                alt="adobe blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hybrid Designer Career Path
                <span className={styles.customDate}>
                  Adobe<span aria-hidden="true" className={styles.bullet}> · </span>
                  <time>January 10, 2019</time>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/ltuxbos/wcw-february-with-katie-langerman-2df2c282e9ea"
                alt="ladies that ux boston wcw"
                target="_blank"
                rel="noopener noreferrer"
              >
                LTUX Boston #WCW
                <span className={styles.customDate}>
                Ladies that UX Boston<span aria-hidden="true" className={styles.bullet}> · </span>
                  <time>February 14, 2018</time>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
};

export const pageQuery = graphql`
  query IndexPage {
    allMdx {
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
  }
`

export default IndexPage;
