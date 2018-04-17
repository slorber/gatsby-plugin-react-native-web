import React from "react"
import {AppRegistry} from 'react-native'

exports.getRenderer = () => {
  return (element, container, callback) => {
    class Root extends React.Component {
      render() {
        return element;
      }
    }
    AppRegistry.registerComponent('App', () => Root);
    AppRegistry.runApplication('App', { initialProps: {}, rootTag: container, callback });
  };
};
