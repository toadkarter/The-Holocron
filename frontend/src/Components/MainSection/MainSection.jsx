import React from 'react';
import styled from 'styled-components';
import ComicCardContainer from '../ComicCardContainer/ComicCardContainer';
import PageHeader from '../PageHeader/PageHeader';


function MainSection() {
  return (
      <>
        <PageHeader title="checkInvoice"/>
        <ComicCardContainer/>
      </>
  );
}

export default MainSection;