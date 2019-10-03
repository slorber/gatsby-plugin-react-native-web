import './layout.css'

import { Link, navigate } from 'gatsby'
import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

import ExternalLink from './externalLink'

const Menu = () => (
  <Appbar>
    <Appbar.Action icon="home" onPress={() => navigate('/')} />
    <Link
      to={'expo'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      Expo
    </Link>
    <Link
      to={'paper'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      rn-paper
    </Link>
    <Link
      to={'elements'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      rn-elements
    </Link>
    <Link
      to={'kittens'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      ui-kittens
    </Link>
    <Link
      to={'nachos'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      nachos-ui
    </Link>
    <Link
      to={'nativebase'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      nativebase
    </Link>
    <ExternalLink
      href={'report.html'}
      style={{ margin: 20, color: 'white', fontWeight: 'bold' }}
    >
      Bundle analysis
    </ExternalLink>
  </Appbar>
)

const Layout = ({ title, children }) => (
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
)

export default Layout
