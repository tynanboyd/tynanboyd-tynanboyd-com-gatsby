import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/seo';

const StyledMain = styled.main`
  h2 {
    font-size: 1rem;
    color: var(--grey);
    margin-bottom: 1rem;
  }
`;

const ProjectList = styled.ul`
  margin-top: 0;
  margin-bottom: 3rem;

  li {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  span {
    color: var(--grey);
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--yellow);
    }
  }
`;

const Columns = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .headshot {
    border: 2px solid black;
    border-radius: 5px;
    @media (min-width: 601px) {
      max-width: 150px;
    }
  }

  @media (min-width: 601px) {
    flex-direction: row;
  }

  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;

    @media (min-width: 601px) {
      padding: 0 2rem 0 0;
      justify-content: flex-start;
    }

    &--1 {
      flex-basis: 66%;
    }

    &--2 {
      flex-basis: 30%;
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export default function PortfolioPage() {
  return (
    <>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <StyledMain>
        <Columns>
          <div className="column column--1">
            <h2>Projects</h2>
            <ProjectList>
              <li>
                <a target="_blank" href="https://wearepixel.ca">
                  Pixel
                </a>
                <span>Design, Development</span>
              </li>
              <li>
                <a target="_blank" href="https://albertacarpetcleaning.ca">
                  Alberta Carpet Cleaning
                </a>
                <span>Design</span>
              </li>
              <li>
                <a target="_blank" href="https://breakawayaccounting.ca">
                  Breakaway Accounting
                </a>
                <span>Design, Development, Branding</span>
              </li>
              <li>
                <a target="_blank" href="https://commongroundarts.ca">
                  Common Ground Arts Society
                </a>
                <span>Design, Development, Branding</span>
              </li>
              <li>
                <a target="_blank" href="https://itecanada.org">
                  ITE Canada
                </a>
                <span>Design</span>
              </li>
              <li>
                <a target="_blank" href="https://muttart.org">
                  The Muttart Foundation
                </a>
                <span>Design</span>
              </li>
              <li>
                <a target="_blank" href="https://nireit.com">
                  Nearctic
                </a>
                <span>Design, Webflow Development</span>
              </li>
              <li>
                <a target="_blank" href="https://quigg.com/">
                  Quigg
                </a>
                <span>Gatsby Development</span>
              </li>
              <li>
                <a target="_blank" href="https://techeasy.ca/">
                  TechEasy
                </a>
                <span>Design, Development</span>
              </li>
            </ProjectList>
            <h2>An Award I Won Once</h2>
            <ProjectList>
              <ul>
                <li>
                  <a href="https://awards.adclubedm.com/category/2021/creative-awards/website-under-50/#alberta-innovates-learn-how-website">
                    Learn How Alberta Innovates
                  </a>
                  <span>
                    Development, Gatsby (subcontracted by RED the Agency)
                  </span>
                </li>
              </ul>
            </ProjectList>
          </div>
          <div className="column column--2">
            <h2>What I look like</h2>
            <p>So you can say hello at the grocery store</p>
            <StaticImage
              className="headshot"
              src="../assets/images/tynan-boyd.jpg"
              alt="Tynan Boyd, wearing glasses and an orange cardigan with a collared shirt"
              placeholder="blurred"
              width={600}
            />
          </div>
        </Columns>
      </StyledMain>
    </>
  );
}
