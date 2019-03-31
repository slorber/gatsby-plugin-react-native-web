import React from 'react'
import './layout.css'
import { Text, View } from 'react-native'

const Example = ({ title, children, style }) => (
  <View
    style={[
      {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
      },
    ]}
  >
    <Text style={{ marginVertical: 10, fontSize: 24 }}>{title}</Text>
    <View style={style}>{children}</View>
  </View>
)

export default Example
