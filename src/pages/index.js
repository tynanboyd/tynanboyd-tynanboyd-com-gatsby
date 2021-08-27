import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import styled from 'styled-components';

export default function HomePage() {
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
          I work at <a rel="noopener" target="_blank" href="https://pixeldesigns.ca">Pixel Designs</a>, where
          top-notch sites are made. If you've got a serious development project,
          that's where you want to go. For more casual work,{' '}
          <Link to="/contact">I might be able to help.</Link>
        </p>
      </section>
    </>
  );
}
