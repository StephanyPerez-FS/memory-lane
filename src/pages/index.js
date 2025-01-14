import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Welcome to Memory Lane</h1>
      <p style={{ textAlign: "center" }}>
        A blog about technology, learning, and reviews.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2>{post.frontmatter.title}</h2>
            <p>{post.excerpt}</p>
            <a
              href={post.fields.slug}
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`

export default HomePage
