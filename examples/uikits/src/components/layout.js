import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

const Menu = () => (
  <Appbar>
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
