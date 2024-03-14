import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ProjectList from '../components/ProjectList';
import SEO from '../components/seo';

const StyledMain = styled.main`
  h2 {
    font-size: 1rem;
    color: var(--grey);
    margin-bottom: 1rem;
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

  @media (min-width: 768px) {
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

const projects = [
  {
    url: 'https://wearepixel.ca',
    name: 'Pixel',
    description: 'Design, Development',
  },
  {
    url: 'https://albertacarpetcleaning.ca',
    name: 'Alberta Carpet Cleaning',
    description: 'Design',
  },
  {
    url: 'https://breakawayaccounting.ca',
    name: 'Breakaway Accounting',
    description: 'Design, Development, Branding',
  },
  {
    url: 'https://commongroundarts.ca',
    name: 'Common Ground Arts Society',
    description: 'Design, Development, Branding',
  },
  {
    url: 'https://itecanada.org',
    name: 'ITE Canada',
    description: 'Design',
  },
  {
    url: 'https://muttart.org',
    name: 'The Muttart Foundation',
    description: 'Design',
  },
  {
    url: 'https://nireit.com',
    name: 'Nearctic',
    description: 'Design, Webflow Development',
  },
  {
    url: 'https://quigg.com/',
    name: 'Quigg',
    description: 'Gatsby Development',
  },
  {
    url: 'https://techeasy.ca/',
    name: 'TechEasy',
    description: 'Design, Development',
  },
];

const awards = [
  {
    url: 'https://awards.adclubedm.com/category/2021/creative-awards/website-under-50/#alberta-innovates-learn-how-website',
    name: 'Learn How Alberta Innovates',
    description: 'Development, Gatsby (subcontracted by RED the Agency, 2021)',
  },
  {
    url: '',
    name: 'Perfect Spelling for the Entire Year',
    description: 'Grade 6 Spelling Tests (Westglen Elementary, 2000)',
  },
];

const otherLinks = [
  {
    url: 'https://www.chess.ca/en/ratings/p/?id=184846',
    name: 'Chess Federation of Canada Profile',
    description: `The World's Best Sport`,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <StyledMain>
        <Columns>
          <div className="column column--1">
            <h2>Projects</h2>
            <ProjectList items={projects} />
            <h2>Important Awards I Have Won Throughout Time</h2>
            <ProjectList items={awards}></ProjectList>
            <h2>Vital Links</h2>
            <ProjectList items={otherLinks}></ProjectList>
          </div>
          <div className="column column--2">
            <h2>Roughly What I Look Like</h2>
            <p>So we can say hello at the grocery store</p>
            <StaticImage
              className="headshot"
              src="../assets/images/tynan-boyd-yellow.jpg"
              title="Nice to meet you."
              alt="Tynan Boyd, wearing glasses and an brown collared button-up sweater jacket, AKA a 'shacket'"
              placeholder="blurred"
              width={600}
            />
          </div>
        </Columns>
      </StyledMain>
    </>
  );
}
