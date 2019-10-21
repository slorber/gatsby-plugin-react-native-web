import { BlurView } from 'expo-blur'
import { Camera } from 'expo-camera'
import Constants from 'expo-constants'
import * as Font from 'expo-font'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Image, Text, View } from 'react-native'

import Example from '../components/example'
import Layout from '../components/layout'

function LocationExample() {
  const [item, setItem] = useState(null)

  return (
    <Example title="Location" style={{ justifyContent: 'space-around' }}>
      <Button
        title="Get Location"
        onPress={async () => {
          try {
            setItem(await Location.getCurrentPositionAsync())
          } catch ({ message }) {
            alert('Something went wrong: ' + message)
          }
        }}
      />
      {item && <JSONView json={item} />}
    </Example>
  )
}

function JSONView({ json }) {
  return (
    <ScrollView style={{ flex: 1, overflow: 'scroll' }}>
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: 15,
          color: '#000',
        }}
      >
        {JSON.stringify(json, null, 2)}
      </Text>
    </ScrollView>
  )
}

function FontExample() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      await Font.loadAsync({
        'retro-regular': require('../assets/retro-regular.ttf'),
      })
      setLoaded(true)
    })()
  }, [])

  return (
    <Example title="Font" style={{ justifyContent: 'space-around' }}>
      {loaded && (
        <Text
          style={{
            fontFamily: 'retro-regular',
            backgroundColor: 'transparent',
            fontSize: 56,
            color: '#000',
          }}
        >
          Cool new font
        </Text>
      )}
    </Example>
  )
}

const ConstantsExample = () => (
  <Example title="Constants">
    <Text
      style={{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#000',
      }}
    >
      {JSON.stringify(Constants, null, 2)}
    </Text>
  </Example>
)

const BlurViewExample = () => (
  <Example title="BlurView">
    <Image
      source={{ uri: 'https://i.ytimg.com/vi/y588qNiCZZo/maxresdefault.jpg' }}
      style={{ flex: 1, height: 300 }}
    />
    <BlurView
      style={[
        StyleSheet.absoluteFill,
        { padding: 15, alignItems: 'center', borderRadius: 5 },
      ]}
    >
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: 15,
          color: '#fff',
        }}
      >
        Blur View
      </Text>
    </BlurView>
  </Example>
)

const CameraExample = () => (
  <Example title="Camera">
    <Camera
      style={[{ alignItems: 'center', borderRadius: 5, minHeight: 300 }]}
    />
  </Example>
)

function PermissionsExample() {
  const permissions = [
    ['CAMERA', Permissions.CAMERA],
    ['AUDIO_RECORDING', Permissions.AUDIO_RECORDING],
    ['LOCATION', Permissions.LOCATION],
    ['USER_FACING_NOTIFICATIONS', Permissions.USER_FACING_NOTIFICATIONS],
    ['NOTIFICATIONS', Permissions.NOTIFICATIONS],
    ['CONTACTS', Permissions.CONTACTS],
    ['SYSTEM_BRIGHTNESS', Permissions.SYSTEM_BRIGHTNESS],
    ['CAMERA_ROLL', Permissions.CAMERA_ROLL],
    ['CALENDAR', Permissions.CALENDAR],
    ['REMINDERS', Permissions.REMINDERS],
  ]

  return (
    <Example title="Permissions">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'stretch', flex: 1 }}
      >
        {permissions.map(([permissionName, permissionType]) => (
          <View style={{ marginBottom: 12 }}>
            <Text style={{ marginBottom: 8 }}>{permissionName}</Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-around',
              }}
            >
              <Button
                style={{ marginVertical: 4 }}
                key={permissionType}
                onPress={async () => {
                  alert((await Permissions.getAsync(permissionType)).status)
                }}
                title={`Get Status`}
              />
              <Button
                style={{ marginVertical: 4 }}
                key={permissionType}
                onPress={async () => {
                  alert((await Permissions.askAsync(permissionType)).status)
                }}
                title={`Request`}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </Example>
  )
}

export default () => (
  <Layout title="Expo Examples">
    <LocationExample />
    <FontExample />
    <BlurViewExample />
    <ConstantsExample />
    <CameraExample />
    <PermissionsExample />
  </Layout>
)
