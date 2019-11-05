import React, { useState } from 'react'
import { Button } from 'react-native-ui-kitten'
import KittensSelectExample from '../components/kittens/KittensSelectExample'
import KittensDatepickerExample from '../components/kittens/KittensDatepickerExample'
import Example from '../components/example'
import Layout from '../components/layout'

const ButtonExample = () => (
  <Example title="Button">
    <Button>Button</Button>
    <Button rkType="danger small" style={{ marginTop: 10 }}>
      Cancel
    </Button>
  </Example>
)

const kittens = () => (
  <Layout title={'react-native-ui-kittens examples'}>
    <ButtonExample />
    <KittensSelectExample />
    <KittensDatepickerExample />
  </Layout>
)

export default kittens
