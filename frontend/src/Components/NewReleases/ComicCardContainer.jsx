import React from 'react';
import ComicCard from './ComicCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// TODO: Add something to help with cycling through months.
// TODO: Add date to panels.
function ComicCardContainer() {

  const [comicIssues, setComicIssues] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());

  useEffect(() => { getComicIssues(month); },[]);

  const getComicIssues = async (month) => {
    const api = await fetch(`http://localhost:8080/api/v1/comicissue/month?month=${month}`);

    // This will create a json file from the api call
    const data = await api.json();

    localStorage.setItem('comicIssues', JSON.stringify(data));

    // This will put in the relevant data from the JSON file into the popular variable.
    setComicIssues(data);
  }

  return (
    <ComicCardContainerStyles>
      <input type={"month"} value={month}></input>
      {comicIssues.map((issue) => {
      return (
          <ComicCard issue={issue}/>
      )})}
     </ComicCardContainerStyles>  
  );
}

// Note: Consider making this one of those slidy things
const ComicCardContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default ComicCardContainer;