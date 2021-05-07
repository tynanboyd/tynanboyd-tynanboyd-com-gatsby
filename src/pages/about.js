import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Columns = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .headshot {
    border: 2px solid black;
    border-radius: 5px;
    @media (min-width: 601px) {
      max-width: 300px;
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
  }
`;

export default function AboutPage() {
  return (
    <>
      <>
        <h1 className="text-center">About</h1>
        <Columns>
          <div className="column">
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
          <div className="column">
            <h2>More about me</h2>
            <ul>
              <li>I am pretty good at chess</li>
              <li>I play piano a lot these days</li>
              <li>I like to run and hike and go bouldering</li>
            </ul>
          </div>
        </Columns>
      </>
    </>
  );
}
