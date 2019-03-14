import { gql } from 'apollo-boost'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Query } from 'react-apollo'
import { ActivityIndicator, Linking, Text, View } from 'react-native'
import { TODO_STATS } from '../__apollo_codegen__/TODO_STATS'
import MainLayout from '../layouts/MainLayout'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                siteName
            }
        }
    }
`

const TodoStats = gql`
    query TODO_STATS {
        allTodos: todosCount(filter: { checked: null })
        checkedTodos: todosCount(filter: { checked: true })
        uncheckedTodos: todosCount(filter: { checked: false })
    }
`

const TodoStatCard = ({ label, count }: { label: string; count: number }) => (
  <View
    style={{
      margin: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 5,
      alignItems: 'center',
      minWidth: 200,
    }}
  >
    <Text style={{ margin: 10, fontSize: 20 }}>{label}</Text>
    <Text
      style={{ margin: 10, fontSize: 30, fontWeight: 'bold', color: 'blue' }}
    >
      {count}
    </Text>
  </View>
)

const TodoStatsQuery = () => (
  <Query<TODO_STATS> query={TodoStats}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <View style={{ padding: 20 }}>
            <ActivityIndicator size="large"/>
          </View>
        )
      }
      if (error) {
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ color: 'red', fontSize: 20 }}>Error :(</Text>
            <Text style={{ color: 'red' }}>
              Maybe the CodeSandbox GraphQL server is offline.
            </Text>
            <Text
              style={{ color: 'red', textDecorationLine: 'underline' }}
              onPress={() =>
                Linking.openURL('https://codesandbox.io/s/34p241l2r1')
              }
            >
              Open it to reactivate it
            </Text>
          </View>
        )
      }
      return (
        <View
          style={{
            padding: 10,
            flexGrow: 1,
            flexDirection: 'row',
          }}
        >
          <TodoStatCard label="All todos" count={data!.allTodos}/>
          <TodoStatCard label="Checked todos" count={data!.checkedTodos}/>
          <TodoStatCard label="Unchecked todos" count={data!.uncheckedTodos}/>
        </View>
      )
    }}
  </Query>
)

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    return (
      <MainLayout>
        <View
          style={{
            margin: `0 auto`,
            marginBottom: 15,
            marginTop: 15,
            maxWidth: 650,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text>This is an example of Gatsby using react-native-web</Text>
          <Text
            style={{ marginTop: 10, fontWeight: 'bold' }}
            accessibilityRole="link"
            href="https://github.com/slorber/gatsby-plugin-react-native-web/"
          >
            Check https://github.com/slorber/gatsby-plugin-react-native-web
          </Text>
        </View>
        <View>
          <TodoStatsQuery/>
        </View>
      </MainLayout>
    )
  }
}
