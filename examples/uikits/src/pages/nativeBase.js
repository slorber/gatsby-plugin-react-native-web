import React, { useState } from 'react'

import Layout from '../components/layout'
import Example from '../components/example'
import { Text } from 'react-native'

/*
const ButtonExample = () => (
  <Example title="Button">
    <Button />
  </Example>
)
const FabExemple = () => {
  const [active, setActive] = useState(false)
  return (
    <Example title="Fab">
      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => setActive(!active)}
      >
        <Icon name="share" />
        <Button style={{ backgroundColor: '#34A34F' }}>
          <Icon name="logo-whatsapp" />
        </Button>
        <Button style={{ backgroundColor: '#3B5998' }}>
          <Icon name="logo-facebook" />
        </Button>
        <Button disabled style={{ backgroundColor: '#DD5144' }}>
          <Icon name="mail" />
        </Button>
      </Fab>
    </Example>
  )
}
*/

const Elements = () => (
  <Layout title={'native-base examples'}>
    <Text>Help me make this work please!</Text>
  </Layout>
)

export default Elements
