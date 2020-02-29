import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  //console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>DMA thougths </h1>
        <h2>{data.allMarkdownRemark.totalCount} records</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h4>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h4>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
