import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavButtonContainer from '../NavButtonContainer/NavButtonContainer';

function NavBar() {
  return (
      <>
        <NavBarStyles>
            <Logo/>
            <NavButtonContainer/>
        </NavBarStyles>
        <LineBreak/>
      </>
  );
}

const NavBarStyles = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const LineBreak = styled.hr`
    align-self: center;
    border-color: #EB3D54;
    width: 98%;
    margin: auto;
`

export default NavBar;