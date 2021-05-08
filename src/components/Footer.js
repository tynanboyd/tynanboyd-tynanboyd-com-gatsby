import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;

  div {
    max-width: 1170px;
    padding: 0 25px;
  }
  
  .footer-heading {
    display: block;
    font-weight: bold;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles className="text-center">
        <div>
          <span className="footer-heading">Disclaimer</span>
          <small>
            I use this site as a web development playground. It's where I try
            out new ideas, and get to follow through with putting them on the
            World Wide Web. The content here is likely to be grossly out of
            date, incomplete, or bizarre.
          </small>
          <p>&copy; Tynan Boyd {new Date().getFullYear()}</p>
        </div>
      </FooterStyles>
    </>
  );
}
