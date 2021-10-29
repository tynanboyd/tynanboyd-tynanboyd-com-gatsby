import React from "react";
import SEO from "../components/seo";
import PageTitle from "../components/PageTitle";

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" />
      <PageTitle title="Contact" />
      <p>
        The best way to get in touch is by email:{" "}
        <a href="mailto:tynanianboyd@gmail.com">tynanianboyd@gmail.com</a>.
      </p>
    </>
  );
}
