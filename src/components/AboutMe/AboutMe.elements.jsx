import styled from 'styled-components'

export const BodyText = styled.p`
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin: 0 10% 0 10%;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin: 0 5%;
  }
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`
