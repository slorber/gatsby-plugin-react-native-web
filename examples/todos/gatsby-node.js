const merge = require('webpack-merge')

exports.onCreateBabelConfig = ({ actions }) => {
}
/*
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {

  // See https://www.gatsbyjs.org/docs/add-custom-webpack-config/#modifying-the-babel-loader

  const config = getConfig()
  const jsLoaderRule = loaders.js()
  console.log('jsLoaderRule', JSON.stringify(jsLoaderRule, null, 2))

  const updatedBabelLoaderRule = {
    // ...jsLoaderRule,
    test: /\.jsx?$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      // ...jsLoaderRule.use,
      // loader: 'babel-loader',
      loader: jsLoaderRule.loader,
      options: {
        // ...jsLoaderRule.use.options,
        babelrc: false,
        configFile: false,
        presets: [
          'babel-preset-gatsby',
          // ...jsLoaderRule.use.options.presets,
          ['@babel/preset-env', { useBuiltIns: 'usage' }],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          // ...jsLoaderRule.use.options.plugins,
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
  }

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/),
    ), updatedBabelLoaderRule]

  actions.replaceWebpackConfig(config)
}
*/


exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'usage' }],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
  })
  actions.replaceWebpackConfig(config)
}
