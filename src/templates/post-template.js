import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            style={{
              width: "100%",
              margin: "20px 0",
              borderRadius: "8px",
            }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image
      }
      body
    }
  }
`

export default PostTemplate
