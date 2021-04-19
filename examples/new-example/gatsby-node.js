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
  const gatsbyConfig = getConfig()

  console.log({ entry: gatsbyConfig.entry })
  if (!gatsbyConfig.context) {
    throw new Error("Expected Gatsby config to provide the root context")
  }

  let config
  try {
    // config = customizeExpoJsLoader(withUnimodules(gatsbyConfig))
    config = gatsbyConfig
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  actions.replaceWebpackConfig(config)
}

exports.onCreateWebpackConfig = onCreateWebpackConfig
