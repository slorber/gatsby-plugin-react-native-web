# Gatsby plugin for React-Native-Web / Expo

[![NPM](https://img.shields.io/npm/dm/gatsby-plugin-react-native-web.svg)](https://www.npmjs.com/package/gatsby-plugin-react-native-web)
[![Build Status](https://travis-ci.com/slorber/gatsby-plugin-react-native-web.svg?branch=master)](https://travis-ci.com/slorber/gatsby-plugin-react-native-web)

Adds [React-Native-Web](https://github.com/necolas/react-native-web) and [Expo](https://docs.expo.io/) support to a Gatsby site.

Example "production" usage on my blog: [sebastienlorber.com/using-expo-in-gatsby](https://sebastienlorber.com/using-expo-in-gatsby)

--- 

# Why

Main reasons:

- sharing components between your mobile app and your static website.
- using [atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js/) with React-Native-Web

Cross-platform code is finally taking off, and it's time to share more code between web and mobile.
There's already Expo web, but it is not suited for a marketing website that needs JAMStack / SEO / CMS integration / Performance / Gatsby-image ...
This project aims to "merge" Expo for web with Gatsby, so that you can build useful things like:

- Share a universal cross-platform design system between your mobile app and your marketing website
- Blog about ReactNative, and include runnable RN demos directly in your MDX
- Document your ReactNative components with Docz
- Use ReactNativeWeb as a performant CSS-in-JS lib, like Twitter does (see [atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js/)).

--- 

# Supported features

This plugin uses the same setup as Expo for web, thanks to [@expo/webpack-config](https://www.npmjs.com/package/@expo/webpack-config)

Support includes:
- Primitive components from ReactNative (check RNW [support](https://github.com/necolas/react-native-web#compatibility-with-react-native))
- Expo unimodules with web support like `expo-camera` (check Expo doc for support)
- .web.js extension handling
- Universal ReactNative design system libraries, like `react-native-paper`, `react-native-ui-kitten`...
- Universal gesture systems with Animated, `react-native-gesture-handler` or Reanimated.
- Universal SVG components using `react-native-svg`
- Automatic transpilation of third party react-native libs
- Works in MDX
- Works in Docz (Gatsby-based)


# Recipe

Use the new Gatsby Recipe feature to get started fast:

```
gatsby recipes https://raw.githubusercontent.com/slorber/gatsby-plugin-react-native-web/master/recipe.mdx
```


# Manual setup


**1. Install required dependencies**

```
yarn add react-native react-native-web@~0.11.7 gatsby-plugin-react-native-web expo
```


**2. Create a `gatsby-config.js` and use the plugin:**

```js
   module.exports = {
     plugins: [
       `gatsby-plugin-react-native-web`,
     ],
   }
```

**3. Install additional unimodules / cross-platform libraries**

```
yarn add expo-av
``` 

**4. Create a test pages**

Create an example page like [this one](./recipePage.js) in your `./pages` folder, or try importing React-Native / Expo components into an existing one.

# Demo

The `examples` folder have runnable Gatsby site demos. They are also hosted:

- [My website](https://sebastienlorber.com): an [open-source](https://github.com/slorber/sebastienlorber.com) Gatsby blog. All MDX embedded components are using React-Native ([example](https://sebastienlorber.com/using-expo-in-gatsby)).
- [Todos example](https://gatsby-rnw-todos.netlify.com): a "todo backoffice" built with Gatsby + RNW + Apollo + TS + react-native-paper: I like fancy stacks.

# Example usage

Very basic example:

```js
import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: 'black' },
  text: { fontWeight: 'bold', color: 'red' },
  button: {
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold', color: 'black' },
})

const IndexPage = () => (
  <View style={styles.box}>
    <Text style={styles.text}>
      Hi this is React-Native-Web rendered by Gatsby
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => alert('it works')}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
    <Link to="/page-2/">Go to page 2</Link>
  </View>
)

export default IndexPage
```

![image](https://camo.githubusercontent.com/58ec39b3966cdefb241b90fb4643ad8aa7b971b2/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f445844575f715058304149534148532e6a70673a6c61726765)

# How does it work

- Adds `babel-preset-expo` which manages tree-shaking of `react-native-web` packages.
- Implements module resolution for files with platform extensions like `.web.js`, `.web.tsx`...
- Uses `@expo/webpack-config` which creates aliases for various React Native asset features and ensures that all React Native packages, and Unimodules are loaded with Babel.
- Creates support for Gatsby SSR with `react-native-web`
- Extracts critical CSS with the `StyleSheet` api of `react-native-web` and adds it to the static page.

# FAQ


### Expo already has web support, why do I need this?

Expo web support is more like Create-React-App, it only outputs a single html file and does client side routing. It works fine for apps, but miss the various benefits of Gatsby, including performance, SEO, CMS integration, Gatsby-image...

Actually, this plugin uses the same webpack config as Expo web support, and Expo (Evan Bacon) contributed to this project. You'll also find support for Next if you need a static/SSR hybrid.


### How to share code for navigation/routing?

This is not easy, because navigation patterns are different between web and mobile. 

ReactNavigation may have web support, but Gatsby can't use ReactNavigation config easily to construct static pages.

You'd rather keep using platform-specific navigation trees (pages for Gatsby, and stacks/tabs for ReactNavigation).

Eventually you could build your own cross-platform `navigate()` function, and your own cross-platform `Link` component (take a look at [expo-gatsby-navigation](https://github.com/nandorojo/expo-gatsby-navigation)).


### Can I share the same repo to build a mobile app and a Gatsby site with shared components?

The most simple way to share code between an Expo app and a Gatsby site is currently to use a single folder for both the Expo app and the Gatsby app.

Otherwise you can try to setup a monorepo, but keep in mind this requires more complex configuration, and Metro does not follow symlinks.

You can also read the Expo doc about [adding Gatsby support to an existing app](https://docs.expo.io/versions/latest/guides/using-gatsby/).


### How can I publish an universal cross-platform component that works on web and mobile?

You can take a loot at this example: [expo-dark-mode-switch](https://github.com/EvanBacon/expo-dark-mode-switch). It uses [expo-module-scripts](https://www.npmjs.com/package/expo-module-scripts).

You can also check [react-native-community/bob](https://github.com/react-native-community/bob)


# Hire a freelance expert

Looking for a React/ReactNative freelance expert with more than 5 years production experience?
Contact me from my [website](https://sebastienlorber.com/) or with [Twitter](https://twitter.com/sebastienlorber).
