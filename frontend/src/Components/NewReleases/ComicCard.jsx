import React from 'react';
import styled from 'styled-components';
import ComicCardText from './ComicCardText';

function ComicCard({issue}) {

  return (
        <ComicCardStyles href={issue.linkUrl}>
          <div>
            {/* Consider setting the fetching of this to be async */}
            <img src={issue.imageUrl} alt="comic" target="_blank" rel="noreferrer"/>
            <ComicCardText issue={issue}/>
          </div>
        </ComicCardStyles>       
  );
}

const ComicCardStyles = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin: 1rem;
    div {
      position: relative;
    }

    div img {
        width: 15rem;
        filter: brightness(33%) drop-shadow(0.5rem 0.5rem 0.5rem rgba(0,0,0,1));
        position: absolute;
    }

`

export default ComicCard;