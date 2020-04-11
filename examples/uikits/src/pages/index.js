import React from 'react'

import Layout from '../components/layout'
import { View, Text } from 'react-native'
import ExternalLink from '../components/externalLink'

const P = ({ children }) => (
  <View style={{ margin: 10 }}>
    <Text>{children}</Text>
  </View>
)

const IndexPage = () => (
  <Layout title="Intro">
    <P>
      This is an example Gatsby site build with{' '}
      <ExternalLink href="https://github.com/slorber/gatsby-plugin-react-native-web">
        gatsby-plugin-react-native-web
      </ExternalLink>
      , showing how to use existing ReactNative libraries that support RNW to
      build a static website.
    </P>
    <P>
      If you want to contribute/modify the examples: {' '}
      <ExternalLink href="https://github.com/slorber/gatsby-plugin-react-native-web/tree/master/examples/uikits">
        it's all there
      </ExternalLink>
    </P>
    <P>
      Note: the fact that a site is static does not mean you can't build highly
      interactive things and retrieve dynamic data from apis. See this more
      dynamic example:{' '}
      <ExternalLink href="https://gatsby-rnw-todos.netlify.com/">
        https://gatsby-rnw-todos.netlify.com/
      </ExternalLink>
    </P>
    <P>
      Built by{" "}
      <ExternalLink href="https://twitter.com/sebastienlorber">
        @sebastienlorber
      </ExternalLink>
    </P>
  </Layout>
)

export default IndexPage
