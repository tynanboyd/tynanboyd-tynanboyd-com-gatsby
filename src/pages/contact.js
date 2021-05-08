import React from 'react';
import SEO from "../components/seo";

export default function ContactPage() {
  return (
    <>
    <SEO title="Contact"/>
      <h1 class="text-center">Contact</h1>
      <p class="text-center">
        The best way to get in touch is by email:{' '}
        <a href="mailto:tynanianboyd@gmail.com">tynanianboyd@gmail.com</a>.
      </p>
    </>
  );
}
