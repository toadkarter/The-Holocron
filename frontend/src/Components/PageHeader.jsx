import React from 'react';
import styled from 'styled-components';
import { AiFillCalendar } from 'react-icons/ai';
import { FaFileInvoiceDollar } from 'react-icons/fa';


function PageHeader(props) {

	const title = props.title;

    const newReleases = () => {
        return <>
            <AiFillCalendar size="3rem"/>
            <Header>New Releases</Header>
        </>
    }

    const checkInvoice = () => {
        return <>
            <FaFileInvoiceDollar size="3rem"/>
            <Header>Check Invoice</Header>
        </>
    }

    const selectPageHeader = (title) => {
        switch (title.title) {
            case "newReleases":
                return newReleases();
            
            case "checkInvoice":
                return checkInvoice();

            default: 
                return newReleases();
        }
    }

  return (
      // Could potentially pass in the correct icon and header
      <PageHeaderContainer>
          {selectPageHeader({title})}
      </PageHeaderContainer>
  );
}

const PageHeaderContainer = styled.div`
    margin-top: 1rem; 
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = styled.div`
  margin: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`

export default PageHeader;