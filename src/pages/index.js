import React from 'react';
import { Link } from 'gatsby';

export default function HomePage() {
  return (
    <>
      <section className="text-center">
        <span>Hello, this is the website of</span>
        <h1>Tynan Boyd</h1>
      </section>
      <section className="text-center">
        <p>
          I’m a web developer in Edmonton, Alberta, Canada. Mostly I make custom
          WordPress themes. But this site is built with{' '}
          <a href="https://www.gatsbyjs.com/">Gatsby!</a>
        </p>
        <p>
          I work at <a href="https://pixeldesigns.ca">Pixel Designs</a>, where
          top-notch sites are made. If you've got a serious development project,
          that's where you want to go. For more casual work,{' '}
          <Link to="/contact">I might be able to help.</Link>
        </p>
      </section>
    </>
  );
}
