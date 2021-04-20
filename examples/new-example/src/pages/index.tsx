import React from "react"
import styled from "styled-components/native"
import { Header } from "../components/new-example/Header"
import { CubeExample } from "../components/new-example/CubeExample"

const IndexPage = () => {
  return (
    <Container>
      <Header />
      <Container>
        <CubeExample />
      </Container>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  height: 100vh;
`

export default IndexPage
