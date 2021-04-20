import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import styled from "styled-components/native"

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated"
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"

const IndexPage = () => {
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number; startY: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = x.value
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
      y.value = ctx.startY + event.translationY
    },
    onEnd: _ => {
      x.value = withSpring(0)
      y.value = withSpring(0)
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    }
  })

  return (
    <Container>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Box style={animatedStyle} />
      </PanGestureHandler>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100vh;
`

const BOX_SIZE = 250
const Box = styled(Animated.View)`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-color: red;
`

const styles = StyleSheet.create({
  left: {
    flex: 1,
    backgroundColor: "rose",

    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "lightblue",

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
})

export default IndexPage
