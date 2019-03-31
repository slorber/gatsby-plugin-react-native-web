// See https://callstack.github.io/react-native-paper/using-on-the-web.html
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules.push({
    test: /(([.]js)|([.]web[.]js)|([.]android[.]js))$/,
    include: /node_modules/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view|react-native-elements|react-native-ratings|react-native-drawer|react-native-keyboard-aware-scroll-view|react-native-tab-view|react-native-easy-grid|react-navigation|react-native-iphone-x-helper|native-base-shoutem-theme|native-base[/\\]node_modules[/\\]react-native-vector-icons|react-native-ui-kitten)/,
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

  // Required for ui kittens
  config.resolve.extensions.push('.android.js')

  actions.replaceWebpackConfig(config)
}
