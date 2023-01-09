import React from 'react'
import { SiGithub, SiDevpost, SiLinkedin, SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";


//Styled Components
import { 
  FooterContainer,
  Text,
  IconContainer,
  Icon,
} from './Footer.elements'

const Footer = () => {
  const iconStyle = { color: "white", fontSize: "2.5em"}

  return (
    <FooterContainer>
      <Text>Connect With Me</Text>
      <IconContainer>
        <Icon href="mailto: riri.hong@gmail.com" target="_blank" rel="noreferrer"><MdEmail style={iconStyle}/></Icon>
        <Icon href="https://www.linkedin.com/in/ririhong/" target="_blank" rel="noreferrer"><SiLinkedin style={iconStyle}/></Icon>
        <Icon href="https://github.com/Ri-Hong" target="_blank" rel="noreferrer"><SiGithub style={iconStyle}/></Icon>
        <Icon href="https://leetcode.com/Ri_Hong/" target="_blank" rel="noreferrer"><SiLeetcode style={iconStyle}/></Icon>
        <Icon href="https://devpost.com/riri-hong" target="_blank" rel="noreferrer"><SiDevpost style={iconStyle}/></Icon>

      </IconContainer>
    </FooterContainer>
  )
}

export default Footer