import { AppRegistry } from 'react-native'

function replaceHydrateFunction() {
  return (element, rootTag, callback) => {
    const RootComponent = () => element
    AppRegistry.registerComponent('main', () => RootComponent)
    AppRegistry.runApplication('main', { initialProps: {}, rootTag, callback })
  }
}

exports.replaceHydrateFunction = replaceHydrateFunction
