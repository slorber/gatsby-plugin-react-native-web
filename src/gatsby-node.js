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
        '.mjs',
        '.web.js',
        '.js',
        '.web.ts',
        '.ts',
        '.web.tsx',
        '.tsx',
        '.web.jsx',
        '.jsx',
        '.web.wasm',
        '.wasm',
      ],
      alias: {
        'react-native': 'react-native-web',
      },
    },
  }

  const newConfig = merge(reactNativeWebConfig, originalWebpackConfig)

  actions.replaceWebpackConfig(newConfig)
}
