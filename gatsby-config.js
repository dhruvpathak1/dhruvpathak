module.exports = {
  pathPrefix: "/dhruvpathak",
  plugins: [
    `gatsby-remark-responsive-iframe`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog_content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
