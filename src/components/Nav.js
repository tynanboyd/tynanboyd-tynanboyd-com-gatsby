import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/images/tynan-logo-black.svg';

const LogoStyles = styled.div`
  width: 60px;
  transform: translateY(10px);
  overflow: visible;

  svg {
    overflow: visible;
  }

  #glasses {
    transition: transform 0.1s;
  }

  #hair,
  #glasses {
    transition: fill 0.2s;
  }

  @keyframes pushUpNose {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    #glasses {
      animation: pushUpNose linear 0.5s;
    }

    #hair,
    #glasses {
      fill: var(--orange);
    }
  }
`;

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  margin: 1rem auto 2rem;
  padding: 0 25px;
  overflow: visible;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: var(--black);
    text-decoration: none;

    &[aria-current='page'],
    &:hover {
      text-decoration: underline;
      text-decoration-style: wavy;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <LogoStyles className="logo-wrapper">
        <Link to="/" aria-label="Home page">
          <Logo />
        </Link>
      </LogoStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
