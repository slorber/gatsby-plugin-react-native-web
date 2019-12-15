import { withUnimodules } from '@expo/webpack-config/addons'
import { getModuleFileExtensions } from '@expo/webpack-config/env'

const resolvableExtensions = () => getModuleFileExtensions('web')

function onCreateBabelConfig({ actions }, options) {
  actions.setBabelPreset({
    name: require.resolve(`babel-preset-expo`),
    options,
  })
}

function onCreateWebpackConfig({ actions, getConfig }) {
  const gatsbyConfig = getConfig()
  if (!gatsbyConfig.context) {
    throw new Error('Expected Gatsby config to provide the root context')
  }

  let config
  try {
    config = withUnimodules(gatsbyConfig)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  actions.replaceWebpackConfig(config)
}

exports.resolvableExtensions = resolvableExtensions
exports.onCreateBabelConfig = onCreateBabelConfig
exports.onCreateWebpackConfig = onCreateWebpackConfig
