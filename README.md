Gatsby plugin for react-native-web
===================================


This permits to share components between your mobile app and your Gatsby website.

This plugin:
- add react-native-web babel plugin
- support Gatsby SSR for react-native-web
- extract critical react-native-web StyleSheet CSS during SSR and add it to page

It is similar to other plugins (glamor/styled-components...)




# Install

`npm install --save gatsby-plugin-react-native-web`

or 

`yarn add gatsby-plugin-react-native-web`

For now, stay on version 0.1.2 as 0.2.x need a PR on Gatsby to be merged.


It is recommended to use these versions:

```
"gatsby": "^1.0.0",
"react": "^16.2.0",
"react-dom": "^16.2.0"
```

You will also need `gatsby-plugin-react-next` for React 16 support.

There is an runnable [example](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-react-native-web) in Gatsby repository, which you can use as a boilerplate if you want.

# Example usage

Here is a Gatsby page that renders fine:

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


