import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


function InvoiceContainerCard() {
  const [latestIssues, setlatestIssues] = useState([]);
  const [maxIssueNumber, setMaxIssueNumber] = useState(0);

  useEffect(() => {
  getLatestIssues();
  },[]);


  const generateNumberDropdown = () => {
    const issueNumbers = [...Array(maxIssueNumber).keys()];
    const issueNumbersOptions = issueNumbers.map((issueNumber) => 
    
        <option key={issueNumber+1} value = {issueNumber+1}>
          {issueNumber+1}
        </option>)

    return issueNumbersOptions;
  }

  const generateTitleDropdown = () => {
    const issueTitles = latestIssues.map((latestIssue) => 

      <option key={latestIssue.id} value = {latestIssue.issueNumber}>
        {latestIssue.title}
      </option>)
    
    return issueTitles;
  }

  const getLatestIssues = async () => {
    const api = await fetch("http://localhost:8080/api/v1/comicissue/latest");
    const data = await api.json();
    setlatestIssues(data);
  }


  return (
  <InvoiceContainerCardStyled>
    <select name="Title" onChange={(e)=> {setMaxIssueNumber(parseInt(e.target.value))}}>
      {generateTitleDropdown()} 
    </select>
    <select name="IssueNumber">
      {generateNumberDropdown()}
    </select>
  </InvoiceContainerCardStyled>);
}

const InvoiceContainerCardStyled = styled.div`
    align-self: flex-start;
    background-color: #EB3D54;
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
      background-color: white;
    }
`
export default InvoiceContainerCard;