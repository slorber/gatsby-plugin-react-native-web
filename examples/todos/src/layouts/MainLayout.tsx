import * as React from 'react'
import { View, Platform } from 'react-native'
import { AppApolloProvider } from '../AppApolloClient'
import { Appbar, Provider as PaperProvider } from 'react-native-paper'
import AppLink from '../components/appLink'

const Layout: React.FC = ({ children }) => (
  <View
    style={{
      flex: 1,
      width: '100vw',
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
          icon="home"
          onPress={() => {
            // TODO
          }}
        />
        <View style={{ paddingRight: 10 }}>
          <AppLink to="/" style={{ textShadow: 'none', color: 'white' }}>Home</AppLink>
        </View>


        <Appbar.Action
          icon="list"
          onPress={() => {
            // TODO
          }}
        />
        <View style={{ paddingRight: 10 }}>
          <AppLink to="/todos" style={{ textShadow: 'none', color: 'white' }}>Todos</AppLink>
        </View>

        <Appbar.Action
          icon="add-circle"
          onPress={() => {
            // TODO
          }}
        />
        <View style={{ paddingRight: 10 }}>
          <AppLink to="/createTodo" style={{ textShadow: 'none', color: 'white' }}>Create</AppLink>
        </View>
      </Appbar>
    </View>
    <View
      style={{
        alignItems: 'center',
        padding: 30,
      }}
    >
      <View style={{
        minWidth: 300,
        maxWidth: 1000,
        width: '100%',
      }}>
        {children}
      </View>
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


const MainLayout: React.FC = ({ children }) => (
  <AppApolloProvider>
    <PaperProvider>
      {MaterialIconsWebStyle}
      <Layout>{children}</Layout>
    </PaperProvider>
  </AppApolloProvider>
)

export default MainLayout
