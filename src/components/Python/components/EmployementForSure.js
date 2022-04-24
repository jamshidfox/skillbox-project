import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
`
const FirstContent = styled('div')``
const SecondContent = styled('div')`
  max-width: 500px;
  color: whitesmoke;
  margin-left: 10rem;
`
const Card = styled('div')``
const CardBody = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  min-height: 300px;
  width: 25rem;
  background-color: #ffffff;
  border-radius: 0.7rem;
`
const FirstCardContent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-height: 70px;
  border-radius: 0.7rem;
  border: 1px solid grey;
`
const SecondCardContent = styled('div')`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  margin-top: 1rem;
  max-height: 70px;
  border-radius: 0.7rem;
  border: 1px solid grey;
`

const Employement = () => {
  return (
    <Container>
      <FirstContent>
        <Card className="card">
          <CardBody>
            <div>
              <h1>1300</h1>
              <p>пользователей Skillbox уже трудоустроились в 2021 году</p>
            </div>
            <FirstCardContent>
              <h3 style={{ fontSize: '5000' }}>88%</h3>
              <p style={{ fontSize: 'xx-small', marginLeft: '1rem' }}>
                пользователей находят работу после обращения в ЦРК
              </p>
            </FirstCardContent>
            <SecondCardContent>
              <h2>100%</h2>
              <p>выходят в штат компании после стажировки</p>
            </SecondCardContent>
          </CardBody>
        </Card>
      </FirstContent>
      <SecondContent>
        <h1 style={{ fontWeight: '600', color: 'whitesmoke' }}>
          Почему мы уверены в вашем трудоустройстве?
        </h1>
        <div>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            <strong>Опредляем потребности рынка</strong>
          </p>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            Мы тщательно анализируем профессии, в которых помогаем с трудоустройством: опрашиваем
            специалистов, оцениваем вакансии, потребность в кандидатах и доступность профессии для
            новичков.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            <strong>Даём качественные знания</strong>
          </p>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            Помогаем получить навыки, которые необходимы здесь и сейчас. Все спикеры — практикующие
            специалисты, а их знания востребованы на рынке.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            <strong>Поддерживаем на старте карьеры</strong>
          </p>
          <p style={{ fontWeight: '100', fontSize: 'small' }}>
            Наши консультанты контролируют каждый шаг на пути к вашей карьере. Они помогают избежать
            ошибок и спланировать профессиональный путь.
          </p>
        </div>
      </SecondContent>
    </Container>
  )
}
export default Employement
