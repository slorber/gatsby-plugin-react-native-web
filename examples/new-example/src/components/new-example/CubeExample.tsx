import React from "react"

import Animated, {
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  interpolate,
  Extrapolate,
} from "react-native-reanimated"

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"

import styled from "styled-components/native"
import { useVector, Vector } from "react-native-redash"
import { SmallTitle } from "./SmallTitle"

const getDistanceFromOrigin = (
  position: Vector<Animated.SharedValue<number>>
) => {
  "worklet"

  const d = Math.sqrt(
    Math.pow(position.x.value, 2) + Math.pow(position.y.value, 2)
  )

  return d
}

export const CubeExample = () => {
  const cubePosition = useVector(0)
  const scaleFactor = useSharedValue(0.8)

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number; startY: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = cubePosition.x.value
      ctx.startY = cubePosition.y.value
      scaleFactor.value = withSpring(1)
    },
    onActive: (event, ctx) => {
      cubePosition.x.value = ctx.startX + event.translationX
      cubePosition.y.value = ctx.startY + event.translationY
    },
    onEnd: _ => {
      cubePosition.x.value = withSpring(0)
      cubePosition.y.value = withSpring(0)
      scaleFactor.value = withSpring(0.8)
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    const distance = getDistanceFromOrigin(cubePosition)

    return {
      transform: [
        {
          translateX: cubePosition.x.value,
        },
        {
          translateY: cubePosition.y.value,
        },
        {
          scale: scaleFactor.value,
        },
      ],
      borderRadius: interpolate(
        distance,
        [0, 600],
        [8, 200],
        Extrapolate.CLAMP
      ),
    }
  })

  return (
    <Container>
      <SmallTitle>Reanimated box drag animation</SmallTitle>
      <CenteredContainer>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Box style={animatedStyle}>
            <Message>Drag Me</Message>
          </Box>
        </PanGestureHandler>
      </CenteredContainer>
    </Container>
  )
}

const Container = styled.View``

const CenteredContainer = styled.View`
  margin: 16px;
  padding: 16px;
  background-color: #e5e7e9;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

const BOX_SIZE = 250
const Box = styled(Animated.View)`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-color: #99b898;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  cursor: pointer;
`

const Message = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 30px;
`
