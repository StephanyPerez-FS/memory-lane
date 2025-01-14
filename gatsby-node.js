const { createFilePath } = require("gatsby-source-filesystem")

/**
 * Add slug field to Mdx nodes
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Check if the node type is Mdx
  if (node.internal.type === "Mdx") {
    // Generate a slug from the file path
    const slug = createFilePath({ node, getNode, basePath: "src/posts" })

    // Add the slug as a field on the node
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

/**
 * Create Pages
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Define the template for blog posts
  const postTemplate = require.resolve("./src/templates/post-template.js")

  // Query all Mdx nodes to generate pages
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.nodes

  // Create a page for each Mdx node
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: postTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })

  // Example for deferred static generation (DSG)
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
