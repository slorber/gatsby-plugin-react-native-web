import { gql } from 'apollo-boost'
import { Link } from 'gatsby'
import React, { ComponentType } from 'react'
import { Query } from 'react-apollo'
import { ActivityIndicator, Linking, Text, View } from 'react-native'
import { TODO_STATS } from '../__apollo_codegen__/TODO_STATS'
import MainLayout from '../layouts/MainLayout'
import { Avatar, Card, Title, Paragraph, Surface } from 'react-native-paper'
import { stringify } from 'query-string'

const TodoStats = gql`
  query TODO_STATS {
    allTodos: todosCount(filter: { checked: null })
    checkedTodos: todosCount(filter: { checked: true })
    uncheckedTodos: todosCount(filter: { checked: false })
  }
`

const TodoStatCard = ({
  label,
  count,
  icon,
  queryString,
}: {
  label: string
  count: number
  icon: string
  queryString?: Partial<TodosQueryString>
}) => {
  const linkUrl = `/todos${queryString ? '?' + stringify(queryString) : ''}`
  return (
    <View style={{ margin: 20 }}>
      <Surface style={{ elevation: 8 }}>
        <Link to={linkUrl}>
          <Card style={{ minWidth: 250 }}>
            <Card.Title
              title={label}
              subtitle={count}
              left={props => <Avatar.Icon {...props} icon={icon} />}
            />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
        </Link>
      </Surface>
    </View>
  )
}

const TodoStatsQuery = () => (
  <Query<TODO_STATS> query={TodoStats}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <View style={{ padding: 20 }}>
            <ActivityIndicator size="large" />
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
            flexWrap: 'wrap',
          }}
        >
          <TodoStatCard
            label="All todos"
            count={data!.allTodos}
            icon="indeterminate-check-box"
          />
          <TodoStatCard
            label="Checked todos"
            count={data!.checkedTodos}
            icon="check-box"
            queryString={{ checked: true }}
          />
          <TodoStatCard
            label="Unchecked todos"
            count={data!.uncheckedTodos}
            icon="check-box-outline-blank"
            queryString={{ checked: false }}
          />
        </View>
      )
    }}
  </Query>
)

type TextProps = React.ComponentProps<typeof Text>
type WebTextProps = TextProps & {
  href?: string
}
const FixedText = Text as ComponentType<WebTextProps>

export default class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        >
          This is an example of Gatsby using react-native-web
        </Text>
        <FixedText
          style={{ marginTop: 20, fontWeight: 'bold', alignSelf: 'center' }}
          accessibilityRole="link"
          href="https://github.com/slorber/gatsby-plugin-react-native-web/"
        >
          Check https://github.com/slorber/gatsby-plugin-react-native-web
        </FixedText>
        <TodoStatsQuery />
      </MainLayout>
    )
  }
}
