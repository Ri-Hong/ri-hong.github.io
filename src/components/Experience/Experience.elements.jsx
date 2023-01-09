//IMAGE DIMENSIONS: 1500W x 1000H

import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 10% 100px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  // border: 3px solid green;
`

export const SectionColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: center;

  // border: 3px solid green;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }
`

export const Image = styled.img`
  max-width: 90%;
  max-height: 350px;
  border-radius: 10px;
  vertical-align: middle;
  object-fit: contain;
  float: ${({ imgStart }) => (imgStart ? 'left' : 'right')};
  // border: 3px solid red;
`

export const TextSection = styled.div`
  color: #FFFFFF;
  margin: 0;
  // border: 3px solid red;

  @media screen and (max-width: 960px) {
    margin: 30px 0 0 0;
    text-align: center;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;

`

export const Company = styled.h2`
  margin: 0;
  font-size: 32px;

`

export const Time = styled.p`
  margin: 0;
  font-size: 24px;

`

export const Description = styled.p`
  margin: 30px 0 0 0;
  font-size: 24px;
  // border: 3px solid green; 
`

