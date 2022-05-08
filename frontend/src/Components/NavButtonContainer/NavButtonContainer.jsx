import React from 'react';
import styled from 'styled-components';
import NavButton from '../NavButton/NavButton.jsx'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function NavButtonContainer() {
  return (
      <NavButtonContainerStyles>
        {/* Consider looping through these instead */}
            <Link to={'/new_releases'}>
                <NavButton title='NEW RELEASES'/>
            </Link>
            <Link to={'/check_invoice'}>
                <NavButton title='CHECK INVOICE'/>
            </Link>
            <Link to={'/view_collection'}>
                <NavButton title='VIEW COLLECTION'/>
            </Link>

    </NavButtonContainerStyles>
  );
}

const NavButtonContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
`

export default NavButtonContainer;