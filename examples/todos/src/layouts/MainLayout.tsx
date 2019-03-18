import * as React from 'react'
import { View, Platform } from 'react-native'
import { Link } from 'gatsby'
import { AppApolloProvider } from '../AppApolloClient'
import { Appbar, Provider as PaperProvider } from 'react-native-paper'
import './MainLayout.css'

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
      <Appbar>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action
          icon="mail"
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log('Pressed label')}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
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
      </Appbar>
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


/* tslint:disable */
const MaterialIconsWebStyle = Platform.OS === 'web' ? (
  <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
      `}</style>
) : null
/* tslint:enable */


const MainLayout: React.SFC = ({ children }) => (
  <AppApolloProvider>
    <PaperProvider>
      {MaterialIconsWebStyle}
      <Layout>{children}</Layout>
    </PaperProvider>
  </AppApolloProvider>
)

export default MainLayout
