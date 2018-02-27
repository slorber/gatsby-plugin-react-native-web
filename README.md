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


It is recommended to use these versions:

```
"gatsby": "^1.0.0",
"react": "^16.2.0",
"react-dom": "^16.2.0"
```

You will also need `gatsby-plugin-react-next` for React 16 support.

# Example usage

Here is a Gatsby page that renders fine:

``` 
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


![image](https://pbs.twimg.com/media/DXDW_qPX0AISAHS.jpg:large)

