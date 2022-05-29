import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
      <LogoContainer>
        <img src={require('../../Assets/cube.png')} alt="cube"/>
        <div>
            <p style={{'marginBottom': '-0.5rem'}}>The</p>
            <p style={{'marginTop': '-0.5rem'}}><b>Holocron.</b></p>
        </div>
      </LogoContainer>
  );
}

const LogoContainer = styled.div`
    display: flex;
    img {
        width: 3.5rem;
        align-self: center;
        margin-right: 0.5rem;
    }
`

export default Logo;