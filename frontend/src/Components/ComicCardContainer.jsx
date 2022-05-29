import React from 'react';
import ComicCard from './ComicCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function ComicCardContainer() {

  const [comicIssues, setComicIssues] = useState([]);

  useEffect(() => {
  getComicIssues();
  },[]);

  const getComicIssues = async () => {
    const api = await fetch("http://localhost:8080/api/v1/comicissue/month?month=6");
    
    // This will create a json file from the api call
    const data = await api.json();

    localStorage.setItem('comicIssues', JSON.stringify(data));

    // This will put in the relevant data from the JSON file into the popular variable.
    setComicIssues(data);
  }



  // }
// const comicIssues =
//   [
//     {
//       'id': 1,
//       'image': 'https://static.wikia.nocookie.net/starwars/images/c/cb/HalcyonLegacy3-cover.jpg',
//       'title': 'Halcyon Legacy',
//       'number': 3,
//       'author': "Ethan Sacks",
//       "date": "11 May 2022"
//     },
//     {
//       'id': 2,
//       'image': 'https://static.wikia.nocookie.net/starwars/images/b/b2/HanSolo-Chewbacca2-solicit-cover.jpg/',
//       'title': 'Han Solo & Chewbacca',
//       'number': 2,
//       'author': "Marc Guggenheim",
//       "date": "18 May 2022"
//     },
//     {
//       'id': 3,
//       'image': 'https://static.wikia.nocookie.net/starwars/images/3/39/DoctorAphra2020-20-solicit-cover.jpg/',
//       'title': 'Doctor Aphra (2020)',
//       'number': 20,
//       'author': "Alyssa Wong",
//       "date": "18 May 2022"
//     }
//   ]

  return (
    <ComicCardContainerStyles>
      {comicIssues.map((issue) => {
      return (
          <ComicCard issue={issue}/>
      )})}
     </ComicCardContainerStyles>  
  );
}

// Note: Consider making this one of those slidy things
const ComicCardContainerStyles = styled.div`
    margin: 0, auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default ComicCardContainer;