import React from 'react'
import styled from 'styled-components'
import { Card, Row, Col } from 'antd'

const Container = styled('div')`
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 4rem;
`

const CardData = [
  {
    title: '★ 4,75 из 5',
    content: 'на основе 26 293 оценок курса',
    id: 0,
  },
  {
    title: 'Интенсивы со спикером',
    content: 'индивидуальная и командная практика во время курса',
    id: 1,
  },
  {
    title: '3 проекта',
    content: 'включая групповую стажировку',
    id: 2,
  },
  {
    title: 'Гарантируем трудоустройство —',
    content: 'или вернём деньги*',
    id: 3,
  },
]
const LandingPage = () => {
  return (
    <Container>
      <div className="w-100 d-flex justify-content-around">
        {CardData.map((d) => (
          <Col span={3} key={d.id}>
            <Card title={d.title} bordered={false} style={{ height: '160px', width: 'auto' }}>
              <p>{d.content}</p>
            </Card>
          </Col>
        ))}
      </div>
    </Container>
  )
}
export default LandingPage
