module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images/`
            }
        },
        'gatsby-plugin-styled-components',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`
    ]
};
