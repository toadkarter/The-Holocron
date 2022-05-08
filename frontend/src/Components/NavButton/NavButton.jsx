import React from 'react';
import styled from 'styled-components';


function NavButton(props) {
  return (<NavButtonStyled>{props.title}</NavButtonStyled>);
}

const NavButtonStyled = styled.p`
    align-self: flex-start;
    text-align: center;
    font-size: 1rem;
    background-color: #EB3D54;
    color: white;
    width: 10rem;
    padding: .2rem;
    border-radius: 30px;
    font-weight: bold;
    display: block;
    margin: 0.5rem 1rem 0.5rem 1rem;
`

export default NavButton;