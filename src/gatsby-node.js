const merge = require('webpack-merge')

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-native-web`,
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const originalWebpackConfig = getConfig()

  const reactNativeWebConfig = {
    resolve: {
      extensions: [
        '.web.mjs',
        '.web.js',
        '.web.jsx',
        '.web.wasm',
        '.web.json',
        '.web.ts',
        '.web.tsx',
      ],
      alias: {
        'react-native': 'react-native-web',
      },
    },
  }

  const newConfig = merge(reactNativeWebConfig, originalWebpackConfig)

  actions.replaceWebpackConfig(newConfig)
}
