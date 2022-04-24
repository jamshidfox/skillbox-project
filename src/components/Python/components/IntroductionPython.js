import React from 'react'
import styled from 'styled-components'
import { Col, Card, Button } from 'reactstrap'

const Container = styled(Card)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.pythonIntroContainer};
  border-radius: 1.4rem;
  margin: 0rem 1rem;
  padding: 3rem 4rem;
`
const FirstContainer = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
const TimerDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.colors.timerBackground};
  min-height: 60px;
  color: white;
  padding: 1rem;
`
const SecondContainer = styled('div')`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`
const Btn = styled(Button)`
  display:flex
  background-color: ${({ theme }) => theme.colors.btnRegister};
  max-width: 40%;
  height:50px;
  margin-top: 10rem;
  border-radius: 0.7rem;
    &:hover {
        background-color: ${({ theme }) => theme.colors.btnRegisterOnHover} 
    }
`
const IntroductionPython = () => {
  return (
    <Container>
      <FirstContainer>
        <h6>6 МЕСЯЦЕВ БЕСПЛАТНО — ПЕРВЫЙ ПЛАТЁЖ ЧЕРЕЗ ПОЛГОДА!</h6>
        <TimerDiv>
          <div>Участвует в распродаже Скидка 40% действует 1 день</div>
          <div>
            <span>10</span>: <span>20</span>: <span>40</span>
          </div>
        </TimerDiv>
      </FirstContainer>
      <SecondContainer>
        <Col sm="6" className="d-flex flex-column justify-content-around">
          <h1>Профессия Python-разработчик</h1>
          <p>
            На Python пишут веб-приложения и нейросети, проводят научные вычисления и автоматизируют
            процессы. Язык просто выучить, даже если вы никогда не программировали. На курсе вы
            создадите Telegram-бота, полноценный магазин и задачник для портфолио, а Центр карьеры
            поможет найти работу Python-разработчиком.
          </p>
          <Btn>Записаться на курс</Btn>
        </Col>
        <Col sm="6" className="d-flex justify-content-end">
          <img src="https://picsum.photos/200/300?random=1" />
        </Col>
      </SecondContainer>
    </Container>
  )
}

export default IntroductionPython
