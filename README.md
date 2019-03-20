Gatsby plugin for react-native-web
===================================


Share components between your React Native mobile app and your Gatsby static website.

# Install

`npm install --save gatsby-plugin-react-native-web`

or

`yarn add gatsby-plugin-react-native-web`

# Gatsby 2

Use the 2.x branch

`yarn add gatsby-plugin-react-native-web@2.0.0-beta.0`

Add the RN / RNW dependencies.
Choose versions carefully according to RNW doc. 
If you want you can pick versions from `examples` folder.

Please report [here](https://github.com/slorber/gatsby-plugin-react-native-web) if it works fine for you, or not.

# Demo

The `examples` folder have runnable Gatsby site demos. They are also hosted:

- [Todos example](https://gatsby-rnw-todos.netlify.com): a "todo backoffice" built with Gatsby + RNW + Apollo + TS + react-native-paper: a fancy but effective stack. 

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

# Hire a freelance expert

Looking for a React/ReactNative freelance expert with more than 5 years production experience?
Contact me from my [website](https://sebastienlorber.com/) or with [Twitter](https://twitter.com/sebastienlorber).

