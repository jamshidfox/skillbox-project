import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import PythonDiv from './components/IntroductionPython'
import FirstPage from './components/FirstLandingPage'
import EmployementList from './components/Employement'

import 'bootstrap/dist/css/bootstrap.min.css'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 3rem;
`

const Python = () => {
  return (
    <Container>
      <Header />
      <PythonDiv />
      <FirstPage />
      <EmployementList />
    </Container>
  )
}

export default Python
