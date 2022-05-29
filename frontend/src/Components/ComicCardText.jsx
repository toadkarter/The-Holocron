import React from 'react';
import styled from 'styled-components';

function ComicCardText(props) {
  
  const issue = props.issue;

  return (
      <ComicCardTextStyles>
          <HeaderStyles>{issue.title}</HeaderStyles>
          <p>Issue #{issue.number}</p>
          <SubHeaderStyles>by {issue.author}</SubHeaderStyles>
          <p>{issue.date}</p>
      </ComicCardTextStyles>  
  );
}

// Hardcoding the width is super hacky, figure out a way to fix this.
const ComicCardTextStyles = styled.div`
    position: absolute;
    background: transparent;
    margin: auto;
    width: 15rem;
    height: 22.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        text-align: center;
        background: transparent;
        color: white;
        margin: 0.25rem;
    }
`

const HeaderStyles = styled.p`
  font-weight: 600;
  font-size: 1.75rem;
  text-decoration: underline;
`

const SubHeaderStyles = styled.p`
  font-style: italic;
`

export default ComicCardText;