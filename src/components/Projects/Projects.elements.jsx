import styled from 'styled-components'

import { SiGithub, SiDevpost } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0;
  flex-wrap: wrap;
  justify-content: center;
  // border: 3px solid green;
`

export const Project = styled.div`
  color: #ffffff;
  text-align: center;
  min-width: 200px;
  max-width: 500px;

  flex-basis: 40%;
  flex: 1;
  // border: 3px solid red;
  margin: 0px 2% 20px;
  padding: 0;
  flex: 0 1 auto;
`

export const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 10px;
  vertical-align: middle;
  object-fit: fit;
  display:block;
  margin: 20px auto;
`

export const Links = styled.div`
  // border: 3px solid red;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 10px 25% 0 25%;
  @media screen and (max-width: 500px) {
    margin: 10px 15% 0 15%;
    width: 70%;

  }
`

export const Link = styled.a`
// border: 3px solid green;
  z-index: 999;
  display:block;
  pointer-events: auto;
`

export const Title = styled.h1`
  margin: 10px;
  font-size: 40px;
  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
`

export const Date = styled.p`
  margin: 10px;
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  margin: 10px;
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`


export const GithubIcon = styled(SiGithub)`
  color: white;
  font-size: 2.5em;
  // transition: color 0.2s ease-in-out 0.1s;

  &:hover {
    color: #2AE9E3;
  }
`

export const DevpostIcon = styled(SiDevpost)`
  color: white;
  font-size: 2.5em;
  // transition: color 0.2s ease-in-out 0.1s;
  
  &:hover {
    color: #2AE9E3;
  }
`

export const LinkIcon = styled(AiOutlineLink)`
  color: white;
  font-size: 2.5em;
  // transition: color 0.2s ease-in-out 0.1s;
  
  &:hover {
    color: #2AE9E3;
  }
`