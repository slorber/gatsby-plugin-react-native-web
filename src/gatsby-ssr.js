import React from "react"
import ReactDOMServer from 'react-dom/server'
import {AppRegistry} from 'react-native'


exports.replaceRenderer = ({
                             bodyComponent,
                             replaceBodyHTMLString,
                             setHeadComponents,
                           }) => {

  class App extends React.Component {
    render() {
      return bodyComponent;
    }
  }

  // See https://github.com/necolas/react-native-web/blob/master/website/guides/getting-started.md#server-side-rendering
  AppRegistry.registerComponent('App', () => App)
  const {element, getStyleElement} = AppRegistry.getApplication('App');

  // Because RNW add an extra container and we don't want it
  const finalElement = element.props.children;

  const html = ReactDOMServer.renderToString(finalElement);
  const styleElement = getStyleElement();

  replaceBodyHTMLString(html);
  setHeadComponents([
    styleElement,
  ]);

};