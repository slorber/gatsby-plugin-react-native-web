import React, { useEffect, useState } from 'react'

import ExpoBlurExample from '../components/expo/ExpoBlurExample'
import ExpoBatteryExample from '../components/expo/ExpoBatteryExample'
import ExpoGesturesExample from '../components/expo/ExpoGesturesExample'
import ExpoCameraExample from '../components/expo/ExpoCameraExample'
import ExpoConstantsExample from '../components/expo/ExpoConstantsExample'
import ExpoFontExample from '../components/expo/ExpoFontExample'
import ExpoLocationExample from '../components/expo/ExpoLocationExample'
import ExpoPermissionsExample from '../components/expo/ExpoPermissionsExample'
import Layout from '../components/layout'

export default () => (
  <Layout title="Expo Examples">
    <ExpoLocationExample />
    <ExpoFontExample />
    <ExpoGesturesExample />
    <ExpoBlurExample />
    <ExpoBatteryExample />
    <ExpoConstantsExample />
    <ExpoCameraExample />
    <ExpoPermissionsExample />
  </Layout>
)
