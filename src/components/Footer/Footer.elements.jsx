import styled from 'styled-components'
import { SiGithub, SiDevpost, SiLinkedin, SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const FooterContainer = styled.div`
  // border: 3px solid cyan;
  padding-bottom: 40px;
`
export const Text = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 40px auto 0 auto;
  // border: 3px solid red;
`

export const Icon = styled.a`
`

export const EmailIcon = styled(MdEmail)`
  color: white;
  font-size: 2.5em;
  // transition: color 0.2s ease-in-out 0.1s;

  &:hover {
    color: #2AE9E3;
  }
`

export const LinkedinIcon = styled(SiLinkedin)`
  color: white;
  font-size: 2.5em;
  // transition: color 0.2s ease-in-out 0.1s;

  &:hover {
    color: #2AE9E3;
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

export const LeetcodeIcon = styled(SiLeetcode)`
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