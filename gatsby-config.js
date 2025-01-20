module.exports = {
  pathPrefix: "/memory-lane", // Your GitHub Pages repo name
  siteMetadata: {
    title: `Memory Lane`,
    description: `A blog to document my learning journey.`,
    author: `Stephany Perez`,
    siteUrl: `https://StephanyPerez-FS.github.io/memory-lane/`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memory Lane Blog`,
        short_name: `Memory Lane`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
