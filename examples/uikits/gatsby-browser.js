import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

export const wrapRootElement = ({ element }) => {
  return <PaperProvider>{element}</PaperProvider>
}
