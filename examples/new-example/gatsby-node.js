const { withUnimodules } = require("@expo/webpack-config/addons")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

function onCreateWebpackConfig({
  actions,
  getConfig,
  stage,
  rules,
  loader,
  plugins,
  entry,
  resolve,
}) {
  try {
    const gatsbyConfig = getConfig()

    gatsbyConfig.resolve.alias["react-native$"] = "react-native-web"

    if (!gatsbyConfig.context) {
      throw new Error("Expected Gatsby config to provide the root context")
    }

    actions.replaceWebpackConfig(gatsbyConfig)
  } catch (error) {
    console.warn(error)
    process.exit(1)
  }
}

exports.onCreateWebpackConfig = onCreateWebpackConfig
