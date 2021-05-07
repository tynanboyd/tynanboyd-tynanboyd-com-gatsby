import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--yellow: #FFC93F;
		--black: #191919;
		--white: #FAF7F7;
		--orange: #F6511D;
		--blue: #00A6ED;
	}
	
	html {
	}
	
	body {
		background-color: var(--yellow);
		min-height: 100vh;
		position: relative;
	}
	
	.gatsby-image-wrapper img[src*=base44\\,] {
		image-rendering: -moz-crip-edges;
		image-rendering: pixelated;
	}
	
	body::-webkit-scrollbar {
		width: 12px;
	}
	
	html {
		scrollbar-width: thin;
		scrollbar-color: var(--blue) var(--white);
	}
	
	body::-webkit-scrollbar-thumb {
		background-color: var(--red);
		border-radius: 6px;
		border: 3px solid var(--white);
	}
	
	img {
		max-width: 100%;
	}
	
	a {
		color: var(--black);
	}
	
	h1 {
		font-weight: 900;
		font-size: 5rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		line-height: 0.8;
		margin-top: 0;
		border-bottom: 1px dashed var(--black);
	}
	
	section {
		margin-bottom: 1rem;
	}
`;

export default GlobalStyles;
