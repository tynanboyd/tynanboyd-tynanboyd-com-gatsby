import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Book = ({ className, book, children }) => {
  return (
    <article className={className} rating={book.rating}>
      <GatsbyImage
        image={book.bookCover.asset.gatsbyImageData}
        alt={book.name}
      />
      <div>
        <header>
          <Link to={`/book/${book.slug.current}`}>
            <h3>{book.name}</h3>
          </Link>
          {book.currentlyReading ? (
            <span className="currently-reading">Currently Reading</span>
          ) : (
            ''
          )}
        </header>
        {book.rating != null ? <p>{book.rating}/10</p> : <p>Not rated</p>}
      </div>
    </article>
  );
};

const StyledBook = styled(Book)`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 25px;
  background-color: var(--white);
  border-radius: 3px;
  padding: 25px;
  border-bottom: 3px solid var(--orange);
  box-shadow: 1px 1px 2px rgba(10, 0, 0, 0.1);

  h3 {
    margin-bottom: 0;
    margin-right: 5px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .currently-reading {
    font-size: 0.8rem;
    font-weight: 400;
    display: inline-block;
    color: var(--white);
    background-color: var(--orange);
    padding: 5px;
    border-radius: 25px;
    text-align: center;
  }

  header {
    display: flex;
    align-items: center;
  }
`;

const StyledBookList = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: 300px;
  gap: 1rem;

  .card--book {
    article {
      transition: box-shadow 0.2s;
    }
    &:hover {
      article {
        box-shadow: 1px 1px 3px var(--orange);
      }
    }
  }
`;

export default function BookList({ books }) {
  return (
    <StyledBookList>
      {books
        .sort((a, b) => b.rating - a.rating)
        .map((book) => (
          <Link
            key={book.id}
            className="card--book"
            to={`/book/${book.slug.current}`}
          >
            <StyledBook key={book.id} book={book} rating={book.rating} />
          </Link>
        ))}
    </StyledBookList>
  );
}
