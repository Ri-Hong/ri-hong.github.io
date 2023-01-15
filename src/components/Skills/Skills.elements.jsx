import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 10% 0 10%;
  height: max-content;
  // border: 3px solid blue;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

export const Skill = styled.div`
  color: #ffffff;
  font-size: 32px;
  // border: 1px solid grey;
  width: max-content;
  height: max-content;
  padding: 20px 25px;
  margin: 20px;
  border-radius: 10px;
  background: rgba( 255, 255, 255, 0.1 );
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding: 10px 15px;
  }
`
