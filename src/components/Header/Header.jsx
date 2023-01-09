import React from 'react'

//Styled Components
import { 
  HeaderText} from './Header.elements'

const Header = ({text}) => {
  return (
    <div>
      <HeaderText>{text}</HeaderText>
    </div>
  )
}

export default Header