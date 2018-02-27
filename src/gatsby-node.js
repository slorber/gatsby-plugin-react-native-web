
exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      "babel-plugin-react-native-web",
    ]),
  }
}
