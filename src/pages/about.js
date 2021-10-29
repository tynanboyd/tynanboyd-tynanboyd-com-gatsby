import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SEO from "../components/seo";
import PageTitle from "../components/PageTitle";

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

  ul {
    padding: 0;
  }
`;

export default function AboutPage() {
  return (
    <>
      <SEO title="About" />
      <PageTitle title="About" />
      <Columns>
        <div className="column">
          <h2>What I Look Like</h2>
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
          <h2>More About Me</h2>
          <ul className="list">
            <li>I like chess</li>
            <li>I like piano</li>
            <li>I like to run</li>
            <li>I like to build websites</li>
          </ul>
        </div>
      </Columns>
    </>
  );
}
