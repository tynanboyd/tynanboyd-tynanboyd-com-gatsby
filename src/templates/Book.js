import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const SingleBookMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  .gatsby-image-wrapper {
    flex-basis: 300px;
  }
`;

export default function SingleBookPage({ data: { book } }) {
  return (
    <>
      <header>
        <h1>{book.name}</h1>
        {book.rating != null ? <p>{book.rating}/10</p> : <p>Not rated</p>}
        {book.currentlyReading ? (
          <span className="currently-reading">Currently Reading</span>
        ) : (
          ''
        )}
      </header>
      <SingleBookMain>
        <GatsbyImage
          image={book.bookCover.asset.gatsbyImageData}
          alt={book.name}
        />
      </SingleBookMain>
    </>
  );
}
// dynamic based on slug pass in via context (gatsby-node.js)
export const query = graphql`
  query($slug: String!) {
    book: sanityBook(slug: { current: { eq: $slug } }) {
      name
      id
      rating
      bookCover {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
