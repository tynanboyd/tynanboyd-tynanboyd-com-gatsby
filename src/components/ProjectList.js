import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ListStyles = styled.ul`
  margin-top: 0;
  margin-bottom: 3rem;

  li {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    @media (min-width: 601px) {
      margin-bottom: 0.33rem;
    }
  }

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .d-desktop-row {
    @media (min-width: 601px) {
      flex-direction: row;
    }
  }

  a,
  .no-link {
    color: var(--white);
    text-decoration: none;
    display: flex;

    &:hover {
      color: var(--yellow);
    }

    @media (min-width: 601px) {
      gap: 0.5rem;
    }
  }

  .description {
    color: var(--grey);
  }
`;

const ProjectList = ({ items }) => (
  <ListStyles>
    {items.map((item, index) => (
      <li key={index}>
        {item.url ? (
          <a
            target="_blank"
            className="d-flex flex-column d-desktop-row"
            rel="noopener noreferrer"
            href={item.url}
          >
            <span>{item.name}</span>
            <span className="description">{item.description}</span>
          </a>
        ) : (
          <div className="d-flex flex-column d-desktop-row no-link">
            <span>{item.name}</span>
            <span className="description">{item.description}</span>
          </div>
        )}
      </li>
    ))}
  </ListStyles>
);

export default ProjectList;
