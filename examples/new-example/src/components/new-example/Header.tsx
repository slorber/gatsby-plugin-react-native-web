import React from "react"
import styled from "styled-components/native"

export const Header = () => {
  return (
    <Container>
      <Title>New example: Gatsby v3 with React Native Web</Title>
      <Subtitle>
        Made using styled-components and react-native-reanimated@2.+
      </Subtitle>
    </Container>
  )
}

const Container = styled.View`
  padding: 16px;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: gray;
`
