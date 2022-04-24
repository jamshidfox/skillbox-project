import React from 'react'
import styled from 'styled-components'
import { EmployeeCardData } from '../../../constants/data'
import { Badge } from 'reactstrap'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Card = styled('div')`
  margin-top: 2rem;
  border-radius: 0.7rem;
  color: black;
  min-height: 320px;
  width: 18rem;
`
const CardBody = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 280px;
`

const EmployeeCard = () => {
  const Data = EmployeeCardData()

  const handleOnhover = (d) => {
    document.getElementById(d.cardNumber).innerHTML = ''
    document.getElementById(d.cardNumber + 'p').innerHTML = d.contentOnHoverDiscription
  }

  const handleOnLeave = (d) => {
    document.getElementById(d.cardNumber).innerHTML = d.contentTitle
    document.getElementById(d.cardNumber + 'p').innerHTML = d.contentDiscription
  }
  return (
    <Container>
      {Data.map((d) => (
        <Card
          className="card"
          style={{ backgroundColor: `${d.backgroundColor}` }}
          onMouseOver={() => handleOnhover(d)}
          onMouseLeave={() => handleOnLeave(d)}
          key={d.cardNumber}
        >
          <CardBody className="card-body">
            {/* <p>
              <span className="w3-badge">{d.cardNumber}</span>
            </p> */}
            <p>
              <Badge color="dark" pill>
                {d.cardNumber}
              </Badge>
            </p>

            <div className="first-card-div">
              <h1 id={d.cardNumber}>{d.contentTitle}</h1>
              <p id={d.cardNumber + 'p'}>{d.contentDiscription}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </Container>
  )
}
export default EmployeeCard
