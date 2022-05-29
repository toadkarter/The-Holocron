import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ComicCard from "../NewReleases/ComicCard";

function InvoiceContainer() {

    const [comicIssues, setComicIssues] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    // const blah = new Date().toISOString().split("T")[0];
    useEffect(() => { getComicIssues(date); },[""]);

    const getComicIssues = async (date) => {
        const api = await fetch(`http://localhost:8080/api/v1/comicissue/date?date=${date}`);

        // This will create a json file from the api call
        const data = await api.json();

        localStorage.setItem('comicIssues', JSON.stringify(data));

        // This will put in the relevant data from the JSON file into the popular variable.
        setComicIssues(data);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
        getComicIssues(e.target.value);
    }

    return (
        <div>
            <HelperText>
                <p>Please enter the date of your last comic book purchase.</p>
                <p>The new comics will be shown below.</p>
                <input type={"date"} onChange={dateChangeHandler}></input>
            </HelperText>
            <InvoiceContainerStyles>
                {comicIssues.map((issue) => {
                    return (
                        <ComicCard issue={issue}/>
                    )})}
            </InvoiceContainerStyles>
        </div>
    );
}

const HelperText = styled.div`
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InvoiceContainerStyles = styled.div`
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export default InvoiceContainer;