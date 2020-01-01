import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import styles from "../styles/post.module.scss"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Link to="/" className={styles.backLink}>Back home</Link>
      <article className={styles.postWrap}>
	  	<div className={styles.postHeader}>
		  <h1>{mdx.frontmatter.title}</h1>
          <time>{mdx.frontmatter.date}</time>
		</div>
        <div className={styles.postContent}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
