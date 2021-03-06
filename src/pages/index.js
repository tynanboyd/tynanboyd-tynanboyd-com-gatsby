import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import styled from 'styled-components';

export default function HomePage() {
  const currentDate = new Date();
  return (
    <>
      <SEO title="Web developer" />
      <section className="text-center">
        <span>Hello, this is the website of</span>
        <h1>Tynan Boyd</h1>
      </section>
      <section className="text-center large-text">
        <p>
          I’m a web developer and designer in Edmonton, Alberta, Canada. I make
          custom WordPress themes and fast fast fast{' '}
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
          <a rel="noopener" target="_blank" href="https://pixeldesigns.ca">
            Pixel Designs
          </a>
          , where top-notch sites are made. If you've got a serious development
          project, that's where you want to go. For more casual work,{' '}
          <Link to="/contact">I might be able to help.*</Link>
        </p>
        <p>
          <small>
            <sup>
              *Last updated: October 18, 2021.
              <br />
            </sup>
            My freelance schedule is booked through 2021. If we can start your
            project in 2022, let's plant the seed now.
          </small>
        </p>
      </section>
    </>
  );
}
