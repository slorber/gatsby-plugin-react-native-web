import React from 'react'
import { ActivityIndicator, Linking, Text, View } from 'react-native'
import { UPDATE_TODO, UPDATE_TODOVariables } from '../__apollo_codegen__/UPDATE_TODO'
import MainLayout from '../layouts/MainLayout'

import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'
import {
  GET_TODOS,
  GET_TODOS_todos,
  GET_TODOSVariables,
} from '../__apollo_codegen__/GET_TODOS'
import { navigate } from 'gatsby'
import { parse, stringify } from 'query-string'
import { Checkbox, DataTable } from 'react-native-paper'

interface HasQueryString {
  queryString: TodosQueryString
}

const PageSize = 10

const getQueryString = (search: string): TodosQueryString => {
  const parsed = parse(search)
  return {
    checked:
      parsed.checked === 'true'
        ? true
        : parsed.checked === 'false'
        ? false
        : null,
    page: parsed.page ? parseInt(parsed.page as any) : 1,
  }
}

const updateQueryString = (queryString: TodosQueryString): void => {
  const obj: any = {}
  if (queryString.checked !== null) {
    obj.checked = queryString.checked
  }
  if (queryString.page !== PageSize) {
    obj.page = queryString.page
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
        todosCount(filter: $filter)
    }
`

const UpdateTodo = gql`
    mutation UPDATE_TODO($id: String!,$text: String!, $checked: Boolean!) {
        updateTodo(id: $id,text: $text, checked: $checked) {
            id
            text
            checked
        }
    }
`


const TodosTable = ({
                      todos,
                      todosCount,
                      queryString,
                    }: GET_TODOS & HasQueryString) => {
  const numberOfPages = Math.ceil(todosCount / PageSize)
  const pageFirst = ((queryString.page - 1) * PageSize) + 1
  const pageLast = Math.min(todosCount, pageFirst + PageSize)
  const pageLabel = `${pageFirst}-${pageLast} of ${todosCount}`
  return (
    <Mutation<UPDATE_TODO, UPDATE_TODOVariables>
      mutation={UpdateTodo}
    >
      {(updateTodo, { data }) => (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ maxWidth: 120 }}>Id</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title style={{ maxWidth: 50 }}>Status</DataTable.Title>
          </DataTable.Header>

          {todos.map(todo => (
            <DataTable.Row key={todo.id}>
              <DataTable.Cell style={{ maxWidth: 120 }}>{todo.id}</DataTable.Cell>
              <DataTable.Cell>{todo.text}</DataTable.Cell>
              <DataTable.Cell style={{ maxWidth: 50 }}>
                <Checkbox
                  status={todo.checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    updateTodo({
                      variables: {
                        ...todo,
                        checked: !todo.checked,
                      },
                      optimisticResponse: {
                        updateTodo: {
                          __typename: 'Todo',
                          ...todo,
                          checked: !todo.checked,
                        },
                      },
                    })
                  }}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={queryString.page - 1}
            numberOfPages={numberOfPages}
            onPageChange={page => {
              updateQueryString({
                ...queryString,
                page: page + 1,
              })
            }}
            label={pageLabel}
          />
        </DataTable>
      )}
    </Mutation>
  )
}

const TodosQuery = ({ queryString }: HasQueryString) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
      }}
    >
      <Query<GET_TODOS, GET_TODOSVariables>
        fetchPolicy="cache-and-network"
        query={GetTodos}
        variables={{
          filter: { checked: queryString.checked },
          pagination: {
            skip: (queryString.page - 1) * PageSize,
            limit: PageSize,
          },
        }}
      >
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
          return <TodosTable queryString={queryString} {...data!} />
        }}
      </Query>
    </View>
  )
}

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
          page: 1,
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
          page: 1,
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
          page: 1,
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
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 30 }}>Todos page</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TodosFilter queryString={queryString}/>
        </View>
        <TodosQuery queryString={queryString}/>
      </MainLayout>
    )
  }
}
