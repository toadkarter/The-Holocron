import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import InvoiceContainerCard from './InvoiceContainerCard';

function InvoiceContainer() {
    const [comicIssues, setComicIssues] = useState([]);
    const [latestIssues, setLatestIssues] = useState([]);

    useEffect(() => { getLatestIssues(); },[]);

    const getLatestIssues = async () => {
        const api = await fetch("http://localhost:8080/api/v1/comicissue/latest");
        const data = await api.json();
        setLatestIssues(data);
    }

  return (
      <InvoiceContainerStyles>
          <button onClick={() => console.log("We clicking.")}>+</button>
         <InvoiceContainerCard
             setComicIssues={setComicIssues}
             latestIssues = {latestIssues}
         />
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