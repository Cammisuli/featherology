module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        transpileOnly: false,
        compilerOptions: {
          target: 'es5'
        }
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
