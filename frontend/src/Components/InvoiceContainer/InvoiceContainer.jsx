import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import InvoiceContainerCard from '../InvoiceContainerCard/InvoiceContainerCard';


function InvoiceContainer() {


  return (
      <InvoiceContainerStyles>
         <InvoiceContainerCard/>
      </InvoiceContainerStyles>
  );
}

// Note: Consider making this one of those slidy things
const InvoiceContainerStyles = styled.div`
    margin: 0, auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default InvoiceContainer;