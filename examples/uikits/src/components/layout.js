import React from 'react'
import { Link, navigate } from 'gatsby'
import './layout.css'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

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
  <View style={{ minHeight: '100vh' }}>
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
)

export default Layout
