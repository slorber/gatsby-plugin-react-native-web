import React from 'react'
import { Provider } from 'react-native-paper'

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <div style={{ height: '100vh', overflowY: 'auto' }}>{element}</div>
    </Provider>
  )
}
