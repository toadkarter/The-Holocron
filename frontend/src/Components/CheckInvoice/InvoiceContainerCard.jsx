import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


function InvoiceContainerCard({setComicIssues, latestIssues}) {
  const [maxIssueNumber, setMaxIssueNumber] = useState(0);

  const currentObject = {
    title: "title",
    issueNumber: 0
  }

  const updateObject = (title, issueNumber) => {
    currentObject.title = title;
    currentObject.issueNumber = issueNumber;
    console.log(currentObject);
  }


  const deleteHandler = () => {
    console.log("Hello there");
  }

  const generateNumberDropdown = () => {
    const issueNumbers = [...Array(maxIssueNumber).keys()];
    return issueNumbers.map((issueNumber) =>
        <option key={issueNumber + 1} value={issueNumber + 1}>
          {issueNumber + 1}
        </option>);
  }

  const generateTitleDropdown = () => {
    return latestIssues.map((latestIssue) =>
        <option key={latestIssue.id} value={latestIssue.issueNumber}>
          {latestIssue.title}
        </option>);
  }

  const titleDropDownChangeHandler = (e) => {
    const currentTitleIndex = e.nativeEvent.target.selectedIndex;
    const currentTitle = e.nativeEvent.target[currentTitleIndex].text;
    const maxIssueNumber = parseInt(e.target.value);
    updateObject(currentTitle, maxIssueNumber);

    setMaxIssueNumber(maxIssueNumber);
  }

  const numberDropdownChangeHandler = (e) => {
    currentObject.issueNumber = parseInt(e.target.value);
    console.log(currentObject);
    // Add option to update state.
  }

  return (
  <InvoiceContainerCardStyled>
    <select name="Title" onChange={titleDropDownChangeHandler}>
      {generateTitleDropdown()} 
    </select>
    <select name="IssueNumber" onChange={numberDropdownChangeHandler}>
      {generateNumberDropdown()}
    </select>
    <button onClick={deleteHandler}>Delete</button>
  </InvoiceContainerCardStyled>
  );
}

const InvoiceContainerCardStyled = styled.div`
    align-self: flex-start;
    background-color: #EB3D54;
    border: 1px solid red;
    color: white;
    padding: .2rem;
    border-radius: 30px;
    display: block;
    margin: 0.5rem 1rem 0.5rem 1rem;
    width: 80%;
    select {
      background-color: #EB3D54;
      width: 80%;
      border-radius: 30px;
      color: white

    }
    option {
      font-size: 1rem;
    }

    select {
      font-size: 1rem;
    }
`
export default InvoiceContainerCard;