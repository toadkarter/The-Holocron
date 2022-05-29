import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


function InvoiceContainerCard({uniqueId, comicIssues,
                                setComicIssues,
                                latestIssues,
                                invoiceCards,
                                setInvoiceCards}) {


  const [maxIssueNumber, setMaxIssueNumber] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);

  const updateTotalCurrentIssues = (currentTitle, currentNumber) => {
    const currentIssue = {title: currentTitle, issueNumber: currentNumber};
    const updatedIssues = [...comicIssues, currentIssue];
    setComicIssues(updatedIssues);
  }

  const deleteHandler = (e) => {
    const currentId = e.target.value;

    setInvoiceCards(invoiceCards.filter((card) => card.key !== currentId));

    // console.log(uniqueId)
    // console.log(invoiceCards)
    // setInvoiceCards(invoiceCards.filter((el) => el.uniqueId !== invoiceCards.id));
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
    setCurrentTitle(currentTitle);
    setCurrentNumber(maxIssueNumber);
    updateTotalCurrentIssues(currentTitle, currentNumber);

    setMaxIssueNumber(maxIssueNumber);
  }

  const numberDropdownChangeHandler = (e) => {
    setCurrentNumber(parseInt(e.target.value));
    updateTotalCurrentIssues(currentTitle, currentNumber);
  }

  return (
  <InvoiceContainerCardStyled>
    <select name="Title" onChange={titleDropDownChangeHandler}>
      {generateTitleDropdown()}
    </select>
    <select name="IssueNumber" onChange={numberDropdownChangeHandler}>
      {generateNumberDropdown()}
    </select>
    <button onClick={deleteHandler} value={uniqueId}>Delete</button>
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