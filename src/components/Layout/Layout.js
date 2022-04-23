import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  background-color: ${({ theme }) => theme.colors.contentBackground};
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
