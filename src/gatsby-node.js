exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-native-web`,
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.resolve.extensions = [
    '.web.mjs',
    '.mjs',
    '.web.js',
    '.js',
    '.web.ts',
    '.ts',
    '.web.tsx',
    '.tsx',
    'web.jsx',
    '.jsx',
    '.web.wasm',
    '.wasm',
    '.json',
  ]

  actions.replaceWebpackConfig(config)

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
    },
  })
}
