import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import InvoiceContainerCard from './InvoiceContainerCard';
import ComicCard from "../NewReleases/ComicCard";

function InvoiceContainer() {

    const [comicIssues, setComicIssues] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    useEffect(() => { getComicIssues(date); },[]);

    const getComicIssues = async (date) => {
        console.log(date);
        const api = await fetch(`http://localhost:8080/api/v1/comicissue/date?date=${date}`);

        // This will create a json file from the api call
        const data = await api.json();

        localStorage.setItem('comicIssues', JSON.stringify(data));

        // This will put in the relevant data from the JSON file into the popular variable.
        setComicIssues(data);
    }

    return (
        <InvoiceContainerStyles>
            {comicIssues.map((issue) => {
                return (
                    <ComicCard issue={issue}/>
                )})}
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