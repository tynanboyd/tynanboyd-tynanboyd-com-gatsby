import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const SingleBlogStyles = styled.article``;

function SingleBlog({ blog }) {
  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join("")
    );
  }

  return (
    <SingleBlogStyles>
      <header>
        <Link to={`/blog/${blog.slug.current}`}>
          <h3>{blog.name}</h3>
        </Link>
      </header>
    </SingleBlogStyles>
  );
}

export default function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
