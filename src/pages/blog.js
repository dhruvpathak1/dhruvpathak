import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/blog.module.css'

export default function Blog({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <div>
      <Layout>
        <div className={styles.title}>
          <p>Blogs</p>         
        </div>  
        <div className={styles.header}>
          <h1 className={styles.quote}>"An investment in knowledge pays the best interest.” <span className={styles.name}>- Benjamin Franklin</span></h1>
        </div>
        <div className={styles.blogbox}>
          {blogs.map(blog => (
            <Link to={'../blogs/' + blog.frontmatter.slug}>
              <div className={styles.blogdiv}>
                <h2 className={styles.subhead}>{blog.frontmatter.title}</h2>
                <p className={styles.subtitle}>{blog.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
query blogPage {
  allMarkdownRemark(sort: {fields: frontmatter___number, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}

`
