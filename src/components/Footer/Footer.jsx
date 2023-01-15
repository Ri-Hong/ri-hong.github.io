import React from 'react'


//Styled Components
import { 
  FooterContainer,
  Text,
  IconContainer,
  Icon,
  EmailIcon,
  LinkedinIcon,
  GithubIcon,
  LeetcodeIcon,
  DevpostIcon
} from './Footer.elements'

const Footer = () => {

  return (
    <FooterContainer>
      <Text>Connect With Me</Text>
      <IconContainer>
        <Icon href="mailto: riri.hong@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></Icon>
        <Icon href="https://www.linkedin.com/in/ririhong/" target="_blank" rel="noreferrer"><LinkedinIcon /></Icon>
        <Icon href="https://github.com/Ri-Hong" target="_blank" rel="noreferrer"><GithubIcon/></Icon>
        <Icon href="https://leetcode.com/Ri_Hong/" target="_blank" rel="noreferrer"><LeetcodeIcon/></Icon>
        <Icon href="https://devpost.com/riri-hong" target="_blank" rel="noreferrer"><DevpostIcon/></Icon>
      </IconContainer>
    </FooterContainer>
  )
}

export default Footer