Gatsby plugin for react-native-web
===================================


Share components between your React Native mobile app and your Gatsby static website.

# Install

`npm install --save gatsby-plugin-react-native-web`

or

`yarn add gatsby-plugin-react-native-web`

# Gatsby 2

Try the alpha releases `2.0.0-alpha.0` and above

# Gatsby 1

It is recommended to use these versions:

```
"gatsby-plugin-react-native-web": "^0.3.0",
"gatsby": "^1.9.255",
"react": "^16.3.0",
"react-dom": "^16.3.0",
"react-native-web": "^0.6.0",
"babel-plugin-react-native-web": "^0.6.0",
```

You will also need `gatsby-plugin-react-next` for React 16 support.

Gatsby basic config should look like:

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby React Native Web plugin example`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-native-web`,
  ],
}
```


# Example usage

You'd better look at the code of the online demo.

Otherwise, here is a simple Gatsby page that renders fine:

```js
import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: "black" },
  text: { fontWeight: 'bold', color: "red" },
  button: {
    marginVertical: 40, paddingVertical: 20, paddingHorizontal: 10,
    borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey", alignItems: "center"
  },
  buttonText: { fontWeight: 'bold', color: "black" },
});

const IndexPage = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hi this is React-Native-Web rendered by Gatsby</Text>
    <TouchableOpacity style={styles.button} onPress={() => alert("it works")}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
    <Link to="/page-2/">Go to page 2</Link>
  </View>
);

export default IndexPage
```


![image](https://camo.githubusercontent.com/58ec39b3966cdefb241b90fb4643ad8aa7b971b2/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f445844575f715058304149534148532e6a70673a6c61726765)



# How does it work

- add react-native-web babel plugin
- support Gatsby SSR for react-native-web
- extract critical react-native-web StyleSheet CSS during SSR and add it to page

