import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 4rem;
`
const Text = styled('h1')`
  font-weight: 200;
`
const SmallText = styled('h3')`
  font-weight: 200;
`
const Header = () => {
  return (
    <Container>
      <Text>Skillbox</Text>
      <SmallText>Образовательная платформа</SmallText>
    </Container>
  )
}
export default Header
