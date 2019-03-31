import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements'

export const wrapRootElement = ({ element }) => {
  return (
    <RNEThemeProvider>
      <PaperProvider>
        <div style={{ height: '100vh', overflowY: 'auto' }}>{element}</div>
      </PaperProvider>
    </RNEThemeProvider>
  )
}
