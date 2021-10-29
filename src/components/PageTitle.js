import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: var(--orange);
  font-size: 2rem;
  padding-bottom: 4rem;
  border-bottom: 1px dashed lightgrey;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}
