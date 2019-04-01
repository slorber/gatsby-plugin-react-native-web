const path = require('path')

/*
// Only compile files from the react ecosystem.
const modules = [
  path.join('node_modules', 'react-native'),
  path.join('node_modules', 'react-navigation'),
  path.join('node_modules', 'expo'),
  path.join('node_modules', 'unimodules'),
  path.join('node_modules', '@react'),
  path.join('node_modules', '@expo'),
  path.join('node_modules', '@unimodules'),

  path.join('node_modules', 'native-base'),
  path.join(
    'node_modules',
    'native-base',
    'node_modules',
    'react-native-vector-icons'
  ),
  path.join('node_modules', 'native-base-shoutem-theme'),
]
*/

/*
    test: /(([.]js?)|([.]web[.]js?)|([.]android[.]js?))$/,

    include(inputPath) {
      console.log('include', inputPath)
      if (
        inputPath.includes('react-native-ui-kitten') ||
        inputPath.includes('fbjs')
      ) {
        console.log("false");
        return false
      }
      for (const option of modules) {
        if (inputPath.includes(option)) {
          console.log('true')
          return true
        }
      }
      console.log('false')
      return false
    },
 */

/*
test: /(([.]jsx?)|([.]web[.]jsx?)|([.]android[.]jsx?))$/,

include(inputPath) {
  for (const option of modules) {
    if (inputPath.includes(option)) {
      return inputPath
    }
  }
  // Is inside the project and is not one of designated modules
  if (
    !inputPath.includes('node_modules') &&
    inputPath.includes(babelRoot)
  ) {
    return inputPath
  }
  return null
},
*/

/*
    test: /(([.]jsx?)|([.]web[.]jsx?)|([.]android[.]jsx?))$/,
    include: /node_modules/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view|react-native-elements|react-native-ratings|react-native-drawer|react-native-keyboard-aware-scroll-view|react-native-tab-view|react-native-easy-grid|react-navigation|react-native-iphone-x-helper|native-base-shoutem-theme|native-base[/\\]node_modules[/\\]react-native-vector-icons|react-native-ui-kitten)/,
 */


// See https://callstack.github.io/react-native-paper/using-on-the-web.html
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules.push({
    test: /(([.]jsx?)|([.]web[.]jsx?)|([.]android[.]jsx?))$/,
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

  config.resolve.symlinks = false

  config.resolve.alias = {
    ...config.resolve.alias,


    // Alias direct react-native imports to react-native-web
    'react-native$': 'react-native-web',
    // Add polyfills for modules that react-native-web doesn't support
    // Depends on expo-asset
    'react-native/Libraries/Image/AssetSourceResolver$':
      'expo-asset/build/AssetSourceResolver',
    'react-native/Libraries/Image/assetPathUtils$':
      'expo-asset/build/Image/assetPathUtils',
    'react-native/Libraries/Image/resolveAssetSource$':
      'expo-asset/build/resolveAssetSource',
    // Alias internal react-native modules to react-native-web
    'react-native/Libraries/Components/View/ViewStylePropTypes$':
      'react-native-web/dist/exports/View/ViewStylePropTypes',
    'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
      'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
    'react-native/Libraries/vendor/emitter/EventEmitter$':
      'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
    'react-native/Libraries/vendor/emitter/EventSubscriptionVendor$':
      'react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor',
    'react-native/Libraries/EventEmitter/NativeEventEmitter$':
      'react-native-web/dist/vendor/react-native/NativeEventEmitter',
  }

  // console.debug('config', config)

  actions.replaceWebpackConfig(config)
}
