import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import InvoiceContainerCard from './InvoiceContainerCard';
import {uniqueId} from "@splidejs/splide/src/js/utils";

function InvoiceContainer() {
    const [comicIssues, setComicIssues] = useState([]);
    const [latestIssues, setLatestIssues] = useState([]);
    const [invoiceCards, setInvoiceCards] = useState([]);

    useEffect(() => { getLatestIssues(); },[]);

    const drawInvoiceCards = () => {

        const uniqueId = Math.random();
        const invoiceContainerCard =
            <InvoiceContainerCard
                key = {uniqueId}
                uniqueId = {uniqueId}
                comicIssues = {comicIssues}
                setComicIssues={setComicIssues}
                latestIssues = {latestIssues}
                invoiceCards = {invoiceCards}
                setInvoiceCards = {setInvoiceCards}
            />

        setInvoiceCards([...invoiceCards, invoiceContainerCard])
        console.log(invoiceCards);
    }

    const getLatestIssues = async () => {
        const api = await fetch("http://localhost:8080/api/v1/comicissue/latest");
        const data = await api.json();
        setLatestIssues(data)
    }

  return (
      <InvoiceContainerStyles>
          <button onClick={drawInvoiceCards}>+</button>
          {invoiceCards}
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