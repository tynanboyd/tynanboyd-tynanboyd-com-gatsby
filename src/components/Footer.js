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
  
  .strava-badge- {
    display: inline-block;
    height: 16px;
    
    &:hover {
      background-position: 0 -31px;
    }
    
    &follow {
      height: 16px; width: 16px; background: url(//badges.strava.com/echelon-sprite-16.png) no-repeat 0 0;
    }
    
    img {
      visibility: hidden; height: 16px; 
    }
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
          <a href="https://strava.com/athletes/40828048" className="strava-badge- strava-badge-follow" target="_blank"><img src="//badges.strava.com/echelon-sprite-16.png" alt="Strava" /></a>
        </div>
      </FooterStyles>
    </>
  );
}
