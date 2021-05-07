import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BookList from '../components/BookList';
import BookFilters from '../components/BookFilters';
import styled from 'styled-components';

// TODO: Query by current year
// Add year field to Book schema and query by book.year === year

const BookGridStyles = styled.div`
  margin: 2rem 0;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 25px;
    grid-template-rows: auto;
  }
`;

const BooksPage = ({ data }) => {
  const books = data.books.nodes;
  const [order, setOrder] = useState('desc');

  function handleSortBooks(order) {
    switch (order) {
      case 'asc':
        return this.setState({ data: this.state.data.sort((a, b) => a - b) });

      case 'desc':
        return this.setState({ data: this.state.data.sort((a, b) => b - a) });
    }
  }

  return (
    <>
      <h1>Reading</h1>
      <small>{books.length} books in 2020.</small>
      <BookGridStyles>
        <BookFilters handleSortBooks={handleSortBooks} />
        <BookList books={books} />
      </BookGridStyles>
    </>
  );
};

export const query = graphql`
  query BookQuery {
    books: allSanityBook(sort: { fields: rating, order: DESC }) {
      nodes {
        name
        rating
        id
        currentlyReading
        slug {
          current
        }
        bookCover {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

// Gatsby recognizes this and sticks it into props.data

export default BooksPage;
