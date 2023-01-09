import React from 'react'


//Styled Components
import { 
  NavContainer,
  Name,
  NavMenu,
  NavItem,
  NavLink} from './Navbar.elements'
  
import resume from '../Resumes/resume.pdf'

const Navbar = () => {
  return (
    <NavContainer>
      <Name>Ri Hong</Name>

      <NavMenu>
        <NavItem>

          <NavLink href={resume} target="_blank">Resume</NavLink>
        </NavItem>
      </NavMenu>
      
    </NavContainer>
  )
}

export default Navbar