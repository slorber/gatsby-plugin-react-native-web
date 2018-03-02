import React from "react"
import {AppRegistry} from 'react-native'

exports.wrapRootComponent = ({Root}) => {

  AppRegistry.registerComponent('Root', () => Root);

  class WrappedRootComponent extends React.PureComponent {
    render() {
      const { element } = AppRegistry.getApplication('Root', { initialProps: this.props });
      return element;
    }
  }

  return WrappedRootComponent;
};
