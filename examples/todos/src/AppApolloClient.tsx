import React, { ReactNode } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const AppApolloClient = new ApolloClient({
  uri: 'https://34p241l2r1.sse.codesandbox.io/',
  fetch,
})

export default AppApolloClient

export const AppApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={AppApolloClient}>{children}</ApolloProvider>
)
