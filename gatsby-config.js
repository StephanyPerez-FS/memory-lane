/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Memory Lane`,
    description: `A blog to document my learning journey.`,
    author: `Stephany Perez`,
    siteUrl: `https://StephanyPerez-FS.github.io/memory-lane/`, // Fixed URL
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`, // Optional: Add support for MDX files
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memory Lane Blog`, // Updated name to match your site
        short_name: `Memory Lane`, // Updated short_name
        start_url: `/`,
        background_color: `#ffffff`, // Set to a neutral background
        theme_color: `#663399`, // Purple theme color
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Ensure the icon file exists
      },
    },
  ],
}
