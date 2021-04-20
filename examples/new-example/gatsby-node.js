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

    const expoConfig = withUnimodules(gatsbyConfig, {}, {}, false)

    expoConfig.resolve.alias["react-native$"] = "react-native-web"

    if (!expoConfig.context) {
      throw new Error("Expected Gatsby config to provide the root context")
    }

    actions.replaceWebpackConfig(expoConfig)
  } catch (error) {
    console.warn(error)
    process.exit(1)
  }
}

exports.onCreateWebpackConfig = onCreateWebpackConfig
