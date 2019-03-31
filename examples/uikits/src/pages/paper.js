import React, { useState } from 'react'

import Layout from '../components/layout'
import Example from '../components/example'
import {
  Appbar,
  Button,
  Dialog,
  FAB,
  Paragraph,
  Portal,
  Provider,
  Drawer,
  Surface,
  List,
  ProgressBar,
  Searchbar,
  Snackbar,
  Switch,
} from 'react-native-paper'
import { Text, View } from 'react-native'

const AppbarExample = () => (
  <Example title="Appbar">
    <Appbar>
      <Appbar.Action icon="archive" onPress={() => {}} />
      <Appbar.Action icon="mail" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
      <Appbar.Action icon="delete" onPress={() => {}} />
    </Appbar>
  </Example>
)

const ProgressBarExample = () => (
  <Example title="ProgressBar">
    <ProgressBar progress={0.5} color="red" />
  </Example>
)

const SearchbarExample = () => {
  const [text, setText] = useState('')
  return (
    <Example title="Searchbar">
      <Searchbar placeholder="Search" onChangeText={setText} value={text} />
    </Example>
  )
}

const FabExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <Example title="FAB" style={{ paddingTop: 300 }}>
      <FAB.Group
        open={open}
        icon={open ? 'close' : 'add'}
        actions={[
          { icon: 'add', onPress: () => console.log('Pressed add') },
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
        ]}
        onStateChange={({ open }) => setOpen(open)}
      />
    </Example>
  )
}

const DialogExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <Example title="Dialog">
      <Button
        mode="contained"
        style={{ alignSelf: 'flex-start' }}
        onPress={() => setOpen(true)}
      >
        Show Dialog
      </Button>
      <Portal>
        <Dialog visible={open} onDismiss={() => setOpen(false)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setOpen(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Example>
  )
}

const DrawerExample = () => {
  return (
    <Example title="Drawer">
      <Drawer.Section title="Some title">
        <Drawer.Item label="First Item" />
        <Drawer.Item label="Second Item" />
        <Drawer.Item label="Third Item" />
      </Drawer.Section>
    </Example>
  )
}

const SurfaceExample = () => {
  return (
    <Example title="Surface">
      <Surface style={{ elevation: 2, padding: 20, margin: 10 }}>
        <Text>Elevation 2</Text>
      </Surface>
      <Surface style={{ elevation: 4, padding: 20, margin: 10 }}>
        <Text>Elevation 4</Text>
      </Surface>
      <Surface style={{ elevation: 8, padding: 20, margin: 10 }}>
        <Text>Elevation 4</Text>
      </Surface>
      <Surface style={{ elevation: 16, padding: 20, margin: 10 }}>
        <Text>Elevation 4</Text>
      </Surface>
    </Example>
  )
}

const AccordionExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <Example title="Accordion">
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={open}
          onPress={() => setOpen(!open)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </Example>
  )
}

const SnackbarExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Example title="Snackbar">
      <Button
        mode="contained"
        style={{ alignSelf: 'flex-start' }}
        onPress={() => setVisible(!visible)}
      >
        <Text>{visible ? 'Hide' : 'Show'}</Text>
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        <Text>Hey there! I'm a Snackbar.</Text>
      </Snackbar>
    </Example>
  )
}

const SwitchExample = () => {
  const [value, setValue] = useState(false)
  return (
    <Example title="Switch">
      <Switch value={value} onValueChange={() => setValue(!value)} />
    </Example>
  )
}

const Paper = () => (
  <Layout title={'react-native-paper examples'}>
    <AppbarExample />
    <ProgressBarExample />
    <SwitchExample />
    <SnackbarExample />
    <SearchbarExample />
    <DialogExample />
    <AccordionExample />
    <DrawerExample />
    <SurfaceExample />
    <FabExample />
  </Layout>
)

export default Paper
