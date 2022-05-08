import React from 'react';
import styled from 'styled-components';
import ComicCardContainer from '../ComicCardContainer/ComicCardContainer';
import InvoiceContainer from '../InvoiceContainer/InvoiceContainer';
import PageHeader from '../PageHeader/PageHeader';
import { Route, Routes, useLocation } from 'react-router-dom';


function MainSection() {
  
  useLocation();
  return (
      <Routes>
          <Route path={'/new_releases'} element={
            <>
                <PageHeader title="newReleases"/>
                <ComicCardContainer/>
            </>
          }/>
            <Route path={'/check_invoice'} element={
            <>
                <PageHeader title="checkInvoice"/>
                <InvoiceContainer/>
            </>
          }/>
      </Routes>
  );
}

export default MainSection;