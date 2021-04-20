module.exports = {
  plugins: [
    "babel-plugin-react-native-web",
    "babel-plugin-styled-components",
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
  presets: [
    "module:metro-react-native-babel-preset",
    "babel-preset-expo",
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
  ],
}
