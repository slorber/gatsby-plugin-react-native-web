module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-native-web`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
  ],
}
