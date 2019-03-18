import React from 'react'
import { Text, View } from 'react-native'
import MainLayout from '../layouts/MainLayout'
import { Button, TextInput } from 'react-native-paper'

export default class CreateTodo extends React.Component<{},
  { newTodo: string }> {
  state = { newTodo: '' }

  render() {
    return (
      <MainLayout>
        <Text style={{ fontSize: 30 }}>Create todo</Text>
        <TextInput
          style={{ marginTop: 30 }}
          label="What to do? (todo)"
          value={this.state.newTodo}
          onChangeText={newTodo => this.setState({ newTodo })}
        />
        <Button
          style={{ marginTop: 30, alignSelf: 'flex-end' }}
          mode="contained"
          onPress={() => {
            alert("todo")
          }}
        >
          Create
        </Button>
      </MainLayout>
    )
  }
}
