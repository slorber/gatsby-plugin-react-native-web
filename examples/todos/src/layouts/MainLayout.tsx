import * as React from 'react'
import { Linking, Text, View } from 'react-native'
import { Link } from 'gatsby'
import { AppApolloProvider } from '../AppApolloClient'
import './MainLayout.css'

const Menu = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    }}
  >
    <View style={{ padding: 20 }}>
      <Link to="/">Home</Link>
    </View>
    <View style={{ padding: 20 }}>
      <Link to="/todos">Todos</Link>
    </View>
    <View style={{ padding: 20 }}>
      <Link to="/createTodo">Create todo</Link>
    </View>
  </View>
)

const Layout: React.SFC = ({ children }) => (
  <View
    style={{
      flex: 1,
      width: '100%',
    }}
  >
    <View
      style={{
        flex: 0,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      }}
    >
      <Menu />
    </View>
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </View>
)

const MainLayout: React.SFC = ({ children }) => (
  <AppApolloProvider>
    <Layout>{children}</Layout>
  </AppApolloProvider>
)

export default MainLayout
