import React from 'react';
import ComicCard from './ComicCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// TODO: Add something to help with cycling through months.
// TODO: Add date to panels.
function ComicCardContainer() {

  const [comicIssues, setComicIssues] = useState([]);
  const [month, setMonth] = useState(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    return currentDate.split("-").slice(0, 2).join("-");
  });

  useEffect(() => { getComicIssues(month); },[]);

  const getComicIssues = async (month) => {
    const api = await fetch(`http://localhost:8080/api/v1/comicissue/month?month=${month}`);

    // This will create a json file from the api call
    const data = await api.json();

    localStorage.setItem('comicIssues', JSON.stringify(data));

    // This will put in the relevant data from the JSON file into the popular variable.
    setComicIssues(data);
  }

  const monthChangeHandler = (e) => {
    setMonth(e.target.value);
    getComicIssues(e.target.value);
  }

  return (
      <div>
        <ComicCardContainerStyles>
          <input type={"month"} onChange={monthChangeHandler} value={month}></input>
        </ComicCardContainerStyles>
        <ComicCardContainerStyles>
          {
            comicIssues.map((issue) => {
          return (
              <ComicCard issue={issue}/>
          )})}
         </ComicCardContainerStyles>
      </div>
  );
}

// Note: Consider making this one of those slidy things
const ComicCardContainerStyles = styled.div`
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export default ComicCardContainer;