import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

import 'normalize.css';
import styled from 'styled-components';

const ContentStyles = styled.div`
  max-width: 980px;
  margin: 1rem auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1300px) {
    max-width: 1170px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <ContentStyles>
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
