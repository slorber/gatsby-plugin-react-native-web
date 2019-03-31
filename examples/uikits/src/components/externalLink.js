import React from 'react'
import './layout.css'
import { Text } from 'react-native'

const ExternalLink = ({ children, target = "_blank", ...props }) => (
  <Text
    accessibilityRole="link"
    target={target}
    style={{ color: 'blue' }}
    {...props}
  >
    {children}
  </Text>
)

export default ExternalLink
