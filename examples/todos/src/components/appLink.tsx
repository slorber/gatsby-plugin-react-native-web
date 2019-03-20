import React, { CSSProperties, ReactNode } from 'react'
import { Link } from 'gatsby'

const AppLink = (props: {
  to: string
  children?: ReactNode
  style?: CSSProperties
}) => <Link {...props} style={{ textShadow: 'none', ...props.style }} />

export default AppLink
