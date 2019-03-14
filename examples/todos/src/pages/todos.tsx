import * as React from 'react'
import { ActivityIndicator, Linking, Text, View } from 'react-native'
import MainLayout from '../layouts/MainLayout'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import {
  GET_TODOS,
  GET_TODOS_todos,
  GET_TODOSVariables,
} from '../__apollo_codegen__/GET_TODOS'
import { navigate } from 'gatsby'
import { parse, stringify } from 'query-string'

interface TodosQueryString {
  checked: boolean | null
  skip: number
  limit: number
}

interface HasQueryString {
  queryString: TodosQueryString
}

const DefaultSkip = 0
const DefaultLimit = 10

const DefaultPagination = {
  skip: 0,
  limit: 10,
}

const getQueryString = (search: string): TodosQueryString => {
  const parsed = parse(search)
  return {
    checked:
      parsed.checked === 'true'
        ? true
        : parsed.checked === 'false'
        ? false
        : null,
    skip: parsed.skip ? parseInt(parsed.skip as any) : DefaultPagination.skip,
    limit: parsed.limit
      ? parseInt(parsed.limit as any)
      : DefaultPagination.limit,
  }
}

const updateQueryString = (queryString: TodosQueryString): void => {
  const obj: any = {}
  if (queryString.checked !== null) {
    obj.checked = queryString.checked
  }
  if (queryString.skip !== DefaultSkip) {
    obj.skip = queryString.skip
  }
  if (queryString.limit !== DefaultLimit) {
    obj.skip = queryString.skip
  }
  const search = stringify(obj)
  navigate('/todos?' + search)
}

const GetTodos = gql`
  query GET_TODOS($filter: TodosFilter!, $pagination: Pagination!) {
    todos(filter: $filter, pagination: $pagination) {
      id
      text
      checked
    }
    todosCount
  }
`

const TodoItem = ({ todo }: { todo: GET_TODOS_todos }) => (
  <View
    style={{
      margin: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <Text style={{ width: 100 }}>{todo.id}</Text>
    <Text style={{ width: 400 }}>{todo.text}</Text>
    <Text style={{ width: 100 }}>{todo.checked ? 'DONE!' : 'todo'}</Text>
  </View>
)

const TodosPagination = ({
  todosCount,
  queryString,
}: {
  todosCount: number
  queryString: TodosQueryString
}) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text
      style={{
        padding: 10,
      }}
    >
      Total={todosCount}
    </Text>
    <Text
      style={{
        padding: 10,
      }}
    >
      Skip={queryString.skip}
    </Text>
    <Text
      style={{
        padding: 10,
      }}
    >
      Limit={queryString.limit}
    </Text>
    <Text
      style={{
        padding: 10,
      }}
      onPress={() =>
        updateQueryString({
          ...queryString,
          skip: Math.max(0, queryString.skip - DefaultLimit),
        })
      }
    >
      Previous
    </Text>
    <Text
      style={{
        padding: 10,
      }}
      onPress={() =>
        updateQueryString({
          ...queryString,
          skip: queryString.skip + DefaultLimit,
        })
      }
    >
      Next
    </Text>
  </View>
)

const Todos = ({
  todos,
  todosCount,
  queryString,
}: GET_TODOS & HasQueryString) => (
  <View style={{
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around",
  }}>
    <View style={{ padding: 10 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
    <View style={{ padding: 10 }}>
      <TodosPagination todosCount={todosCount} queryString={queryString} />
    </View>
  </View>
)

const TodosQuery = ({ queryString }: HasQueryString) => (
  <View
    style={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    }}
  >
    <Query<GET_TODOS, GET_TODOSVariables>
      query={GetTodos}
      variables={{
        filter: { checked: queryString.checked },
        pagination: {
          skip: queryString.skip,
          limit: queryString.limit,
        },
      }}
    >
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
          <View style={{ padding: 10,       flexGrow: 1,
          }}>
            <Todos queryString={queryString} {...data!} />
          </View>
        )
      }}
    </Query>
  </View>
)

const TodosFilter = ({ queryString }: HasQueryString) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text
      style={{
        padding: 10,
        fontWeight: queryString.checked === null ? 'bold' : 'normal',
      }}
      onPress={() =>
        updateQueryString({
          ...queryString,
          ...DefaultPagination,
          checked: null,
        })
      }
    >
      All
    </Text>
    <Text
      style={{
        padding: 10,
        fontWeight: queryString.checked === true ? 'bold' : 'normal',
      }}
      onPress={() =>
        updateQueryString({
          ...queryString,
          ...DefaultPagination,
          checked: true,
        })
      }
    >
      Only checked
    </Text>
    <Text
      style={{
        padding: 10,
        fontWeight: queryString.checked === false ? 'bold' : 'normal',
      }}
      onPress={() =>
        updateQueryString({
          ...queryString,
          ...DefaultPagination,
          checked: false,
        })
      }
    >
      Only unchecked
    </Text>
  </View>
)

export default class TodosPage extends React.Component<any> {
  render() {
    // @ts-ignore
    const isBrowser = !!global.window
    const queryString = getQueryString(this.props.location.search as string)
    return (
      <MainLayout>
        <View
          style={{
            flex: 1,
            maxWidth: 800,
            alignItems: 'center',
            padding: 30,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 30 }}>Todos page</Text>
          </View>
          <View style={{ padding: 10 }}>
            <TodosFilter queryString={queryString} />
          </View>
          {isBrowser && <TodosQuery queryString={queryString} />}
        </View>
      </MainLayout>
    )
  }
}
