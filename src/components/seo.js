import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ogImage from '../assets/images/tynan-logo.svg';



export default function SEO({ children, location, description, title }) {
  const { site } = useStaticQuery(graphql`
	query {
	  site {
		siteMetadata {
		  title
		  description		  
		  siteURL
		}
	  }
	}
  `);
  return (
	<>
	  <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
		<html lang="en" />
		<title>{title}</title>
		{/* Fav Icons */}
		<link rel="icon" type="image/svg+xml" href="/favicon.png" />
		<link rel="alternate icon" href="/logo.svg" />
		{/* Meta Tags */}
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta charSet="utf-8" />
		<meta name="description" content={site.siteMetadata.description} />
		{/* Open Graph */}
		{location && <meta property="og:url" content={location.href} />}
		<meta property="og:type" content="website" />
		<meta
		  property="og:image"
		  content={site.siteMetadata.siteUrl + ogImage}
		/>
		<meta property="og:title" content={title} key="ogtitle" />
		<meta
		  propery="og:site_name"
		  content={site.siteMetadata.title}
		  key="ogsitename"
		/>
		<meta property="og:description" content={description} key="ogdesc" />
		{children}
	  </Helmet>
	</>
  );
}
