import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const BookFilterStyles = styled.aside`
  background-color: var(--white);
  padding: 25px;
  border-radius: 3px;
  border-bottom: 3px solid var(--orange);

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

const SortButton = styled.button`
  background: none;
  border: none;
  border-radius: 3px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--black);
  text-align: left;
  padding: 0;
  cursor: pointer;
`;

export default function BookFilters({ props }) {
  const { ratings } = useStaticQuery(graphql`
    query RatingQuery {
      ratings: allSanityBook {
        nodes {
          rating
        }
      }
    }
  `);
  const sortedRatings = Object.values(ratings)[0].sort(
    (a, b) => b.rating - a.rating
  );

  return (
    <BookFilterStyles>
      <h4>Sort</h4>
      <SortButton onClick={() => props.handleSortBooks}>High-to-Low</SortButton>
      <SortButton onClick={() => props.handleSortBooks}>Low-to-High</SortButton>
      <h4>Ratings</h4>
      <ul>
        {sortedRatings.map((rating) => (
          <li key={rating.id}>{rating.rating}</li>
        ))}
      </ul>
    </BookFilterStyles>
  );
}
