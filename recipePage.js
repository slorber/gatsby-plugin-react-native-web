import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Video } from 'expo-av'

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: 'black' },
  text: { fontWeight: 'bold', color: 'red' },
  button: {
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold', color: 'black' },
})

const RNWPage = () => (
  <View style={styles.box}>
    <Text style={styles.text}>
      Hi this is React-Native-Web rendered by Gatsby
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => alert('it works')}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
    <Link to="/">Go to home</Link>
    <Video
      source={{
        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      rate={1.0}
      isMuted={true}
      resizeMode="cover"
      shouldPlay={true}
      isLooping={true}
      style={{ width: 500, marginTop: 30 }}
    />
  </View>
)

export default RNWPage
