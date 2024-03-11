import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import styled from 'styled-components';

const styledHomePage = styled.section`
font-size: 3rem;
line-height: 3.6rem;
`;

export default function HomePage() {
  const currentDate = new Date();
  return (
    <>
      <SEO title="Experienced web designer and developer in Edmonton." />
      <section>
        <span>Hello, this is the website of</span>
        <h1>Tynan Boyd</h1>
      </section>
      <styledHomePage>
        <p>
          I’m a web designer and developer in Edmonton, Alberta, Canada. I make
          custom WordPress themes and fast fast <em>fast</em>{' '}
          <a rel="noopener" href="https://www.gatsbyjs.com/" target="_blank">
            {' '}
            Gatsby
          </a>{' '}
          sites.
        </p>
        <p>
          My favourite projects are co-piloted with artists or community-minded
          folks.
        </p>
        <p>
          I work at{' '}
          <a rel="noopener" target="_blank" href="https://wearepixel.ca">
            Pixel
          </a>
          , where top-notch sites are made. If you've got a serious development
          project, that's where you want to go. For more casual work,{' '}
          <Link to="/contact">I might be able to help.*</Link>
        </p>
        <p>
          <small>
            <sup>
              *Last updated: March 2024.
              <br />
            </sup>          
          </small>
        </p>
      </styledHomePage>
    </>
  );
}
