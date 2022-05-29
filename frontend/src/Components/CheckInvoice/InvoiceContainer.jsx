import React, { useState } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import InvoiceContainerCard from './InvoiceContainerCard';


function InvoiceContainer() {
    const [comicIssues, setComicIssues] = useState([]);




  return (
      <InvoiceContainerStyles>
          <button onClick={() => console.log("We clicking.")}>+</button>
         <InvoiceContainerCard setComicIssues={{setComicIssues}}/>
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