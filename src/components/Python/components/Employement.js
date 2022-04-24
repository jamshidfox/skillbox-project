import React from 'react'
import styled from 'styled-components'
import EmployeeCard from './EmployeeCard'
import ThirdContainer from './EmployementForSure'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.employement.containerBg};
  border-radius: 0.7rem;
  padding: 3rem;
`
const FirstContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  color: #e3e3e3;
`
const FirstContainContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const FirstContaintImg = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const SecondContainer = styled('div')`
  margin-top: 4rem;
`

const EmployementList = () => {
  return (
    <Container>
      <FirstContainer>
        <FirstContainContent>
          <h1 style={{ fontSize: '50px', width: '7in', color: 'whitesmoke' }}>
            Трудоустроим или вернём деньги
          </h1>
          <p style={{ fontSize: '15px', width: '4in', color: 'whitesmoke' }}>
            Вас ждёт индивидуальная поддержка HR-специалиста. Вместе вы составите резюме,
            подготовите портфолио и разработаете карьерный план, который поможет найти работу
            быстрее. Сможете выбрать привлекательные вакансии и получите приоритет перед другими
            соискателями
          </p>
          <p>Если вы не выйдете на работу, мы вернём вам деньги за курс*.</p>
        </FirstContainContent>
        <FirstContaintImg>
          <img src="https://picsum.photos/200" />
        </FirstContaintImg>
      </FirstContainer>
      <SecondContainer>
        <div>
          <h1 style={{ color: '#E3E3E3' }}>Чем вам поможет Центр карьеры:</h1>
        </div>
        <EmployeeCard />
      </SecondContainer>
      <ThirdContainer />
    </Container>
  )
}

export default EmployementList
