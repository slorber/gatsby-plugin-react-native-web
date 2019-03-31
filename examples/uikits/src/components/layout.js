import React from 'react'
import { Link, navigate } from 'gatsby'
import './layout.css'
import { Text, View } from 'react-native'
import { Appbar, Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements'

const Menu = () => (
  <Appbar>
    <Appbar.Action icon="home" onPress={() => navigate('/')} />
    <Link
      to={'paper'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      react-native-paper
    </Link>
    <Link
      to={'elements'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      react-native-elements
    </Link>
    <Link
      to={'uiKittens'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      react-native-ui-kittens
    </Link>
  </Appbar>
)

const Layout = ({ title, children }) => (
  <RNEThemeProvider>
    <PaperProvider>
      <View style={{ height: '100vh', overflowY: 'auto' }}>
        <Menu />
        <View>
          <Text
            style={{
              marginVertical: 30,
              marginHorizontal: 10,
              fontSize: 40,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>
        </View>
        {children}
      </View>
    </PaperProvider>
  </RNEThemeProvider>
)

export default Layout
