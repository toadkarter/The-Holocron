import React from 'react';
import ComicCardContainer from './NewReleases/ComicCardContainer';
import InvoiceContainer from './CheckInvoice/InvoiceContainer';
import PageHeader from './PageHeader';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';


function MainSection() {
  
  useLocation();
  return (
      <Routes>
          <Route path={"/"} element={
              <>
                <Navigate to={"/new_releases"}/>
              </>
          }/>

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