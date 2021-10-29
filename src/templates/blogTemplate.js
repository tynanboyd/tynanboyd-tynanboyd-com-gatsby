import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const BlogContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <BlogContainer className="blog-post-container">
      <div className="blog-post">
        <h1 class="text-center">{frontmatter.title}</h1>
        <h2 class="text-center">{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </BlogContainer>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
