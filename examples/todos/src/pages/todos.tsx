import * as React from 'react'
import { Text, View } from 'react-native'
import MainLayout from '../layouts/MainLayout'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import {
  GET_TODOS,
  GET_TODOS_todos,
  GET_TODOSVariables,
} from './__generated__/GET_TODOS'
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
          skip: Math.min(0, queryString.skip - DefaultLimit),
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
  <View style={{ padding: 10 }}>
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
        return <Text>Loading...</Text>
      }
      if (error) {
        return <Text>Error :(</Text>
      }
      return <Todos queryString={queryString} {...data!} />
    }}
  </Query>
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
    const queryString = getQueryString(this.props.location.search as string)
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
          <View style={{ padding: 20 }}>
            <Text>Todos page</Text>
          </View>
          <View style={{ padding: 20 }}>
            <TodosFilter queryString={queryString} />
          </View>
          <View style={{ padding: 20 }}>
            <TodosQuery queryString={queryString} />
          </View>
        </View>
      </MainLayout>
    )
  }
}
