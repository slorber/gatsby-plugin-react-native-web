import React, { useState } from 'react'

import Layout from '../components/layout'
import Example from '../components/example'
import { RkButton, RkChoice, RkSwitch } from 'react-native-ui-kitten'

const RkButtonExample = () => (
  <Example title="RkButton">
    <RkButton>Button</RkButton>
    <RkButton rkType="danger small" style={{ marginTop: 10 }}>
      Cancel
    </RkButton>
  </Example>
)

const RkChoiceExample = () => (
  <Example title="RkChoice">
    <RkChoice rkType="clear" selected={true} />
    <RkChoice rkType="posNeg" selected={false} />
    <RkChoice rkType="radio" selected />
  </Example>
)

const RkSwitchExample = () => {
  const [value, setValue] = useState(false)
  return (
    <Example title="RkSwitch">
      <RkSwitch value={value} onValueChange={setValue} />
    </Example>
  )
}

const kittens = () => (
  <Layout title={'react-native-ui-kittens examples'}>
    <RkButtonExample />
    <RkChoiceExample />
    <RkSwitchExample />
  </Layout>
)

export default kittens
