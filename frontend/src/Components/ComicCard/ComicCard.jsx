import React from 'react';
import styled from 'styled-components';
import ComicCardText from '../ComicCardText/ComicCardText';

function ComicCard(props) {

  const issue = props.issue;

  return (
        <ComicCardStyles>
          <div>
            {/* Consider setting the fetching of this to be async */}
            <img src={issue.imageUrl} alt="cube"/>
            <ComicCardText issue={issue}/>
          </div>
        </ComicCardStyles>       
  );
}

const ComicCardStyles = styled.div`
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