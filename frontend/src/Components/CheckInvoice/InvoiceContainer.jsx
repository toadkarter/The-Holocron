import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ComicCard from "../NewReleases/ComicCard";

function InvoiceContainer() {

    const [comicIssues, setComicIssues] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    // const blah = new Date().toISOString().split("T")[0];
    useEffect(() => { getComicIssues(date); },[date]);

    const getComicIssues = async (date) => {
        const api = await fetch(`http://raspberrypilite.local:8080/api/v1/comicissue/date?date=${date}`);

        // This will create a json file from the api call
        const data = await api.json();

        // This will put in the relevant data from the JSON file into the popular variable.
        setComicIssues(data);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const displayComicIssues = () => {
        if (date === new Date().toISOString().split("T")[0]) {
            return <p></p>
        } else if (comicIssues.length === 0) {
            return <p>You are up to date - no comic issues released since {date}.</p>
        } else {
            return comicIssues.map((issue) => { return (<ComicCard issue={issue}/>)})
        }
    }

    return (
        <div>
            <HelperText>
                <p>Please enter the date of your last comic book purchase.</p>
                <p>The comics you need to catch up on will be shown below.</p>
                <input type={"date"} onChange={dateChangeHandler}></input>
            </HelperText>
            <InvoiceContainerStyles>
                {displayComicIssues()}
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
  input {
    margin-top: 2%;
  }
`

const InvoiceContainerStyles = styled.div`
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export default InvoiceContainer;