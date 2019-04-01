import React, { useState } from 'react'

import Layout from '../components/layout'
import Example from '../components/example'
import {
  Card,
  Bubble,
  Button,
  Switcher,
  Checkbox,
  Spinner,
  Slider,
  ThemeProvider,
} from 'nachos-ui'
import { Text } from 'react-native'

const CardExample = () => {
  const cardStyle = { margin: 15, width: 280 }
  return (
    <Example title="Card" row>
      <Card
        footerContent="The avocado is a tree that is native to Mexico"
        image="https://upx.cz/BsN"
        style={cardStyle}
      />
      <Card
        footerContent="Agaves are a type of succulent plant from Mexico"
        image="https://upx.cz/BsD"
        style={cardStyle}
      />
    </Example>
  )
}

const BubbleExample = () => {
  const bubbleStyle = { margin: 10 }
  return (
    <Example title="Bubble" row>
      <Bubble style={bubbleStyle}>Hey, What’s Up?</Bubble>
      <Bubble style={bubbleStyle} arrowPosition="top" color="#ff9c00">
        What’s cooking?
      </Bubble>
    </Example>
  )
}

const ButtonExample = () => {
  const btnStyle = { margin: 15 }
  return (
    <Example title="Button" row>
      <Button type="success" style={btnStyle}>
        Success
      </Button>
      <Button type="danger" style={btnStyle}>
        Danger
      </Button>
      <Button style={btnStyle}>Primary</Button>

      <Button kind="squared" type="success" style={btnStyle}>
        Success
      </Button>
      <Button kind="squared" type="danger" style={btnStyle}>
        Danger
      </Button>
      <Button kind="squared" iconName="md-cloud-download" style={btnStyle}>
        Primary
      </Button>
      <Button type="success" disabled style={btnStyle}>
        Success
      </Button>
      <Button kind="squared" type="danger" disabled style={btnStyle}>
        Danger
      </Button>
    </Example>
  )
}

const SwitcherExample = () => {
  const btnStyle = { margin: 10, borderRadius: 5, maxWidth: 200 }
  return (
    <Example title="Switcher" row>
      <Switcher>
        <Button value="mute" iconName="md-volume-off" style={btnStyle} />
        <Button value="walk" iconName="md-walk" style={btnStyle} />
        <Button value="wine" iconName="md-wine" style={btnStyle} />
      </Switcher>
    </Example>
  )
}

const CheckboxExample = () => {
  const checkboxStyle = { margin: 15 }
  return (
    <Example title="Checkbox" row>
      <Checkbox style={checkboxStyle} kind="rounded" checked={true} />
      <Checkbox style={checkboxStyle} kind="rounded" checked={false} />
      <Checkbox style={checkboxStyle} kind="rounded" checked={true} disabled />
      <Checkbox style={checkboxStyle} kind="rounded" checked={false} disabled />

      <Checkbox style={checkboxStyle} kind="circle" checked={true} />
      <Checkbox style={checkboxStyle} kind="circle" checked={false} />
      <Checkbox style={checkboxStyle} kind="circle" checked={true} disabled />
      <Checkbox style={checkboxStyle} kind="circle" checked={false} disabled />
    </Example>
  )
}

const SpinnerExample = () => {
  return (
    <Example title="Spinner">
      <Spinner />
    </Example>
  )
}

const SliderExample = () => {
  const [value, setValue] = useState(0.3)
  return (
    <Example title="Slider">
      <Slider value={value} onValueChange={setValue} />
      <Text>{Math.round(value * 100) / 100}</Text>
    </Example>
  )
}

const Nachos = () => (
  <ThemeProvider
    theme={
      {
        // TODO quite undocumented
      }
    }
  >
    <Layout title={'nachos-ui examples'}>
      <CardExample />
      <BubbleExample />
      <ButtonExample />
      <SwitcherExample />
      <CheckboxExample />
      <SpinnerExample />
      <SliderExample />
    </Layout>
  </ThemeProvider>
)

export default Nachos
