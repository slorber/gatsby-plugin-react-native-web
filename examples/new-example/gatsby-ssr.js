/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

console.log("[SSR] Override requestAnimationFrame and window")

global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0)
}

global.window = {
  performance: 69,
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  // Just here to make sure global values are defined
}
