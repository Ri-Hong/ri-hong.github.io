import styled from 'styled-components'

export const NavContainer = styled.div`
  // border: 3px solid green;

  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  color: #FFFFFF;
  background: rgba(0, 0, 0, 0);

`

export const Name = styled.h1`
  font-size: 30px;
  align-items: center;
  // border: 3px solid green;
  margin: 0 40px;
`

export const NavMenu = styled.div`
  // border: 3px solid blue;
`

export const NavItem = styled.p`
  font-size: 20px;
  margin: 0 50px;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: #FFFFFF;
`