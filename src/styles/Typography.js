import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
	html {
		font-family: 'Work Sans', 'system-ui', 'Helvetica', sans-serif;
		color: var(--black);
		line-height: 1.3;				
	}
	
	.text-center {
		text-align: center;
	}
	
	h1, 
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
	}
	
	h1 {
		font-weight: 600;
		font-size: 2.5rem;
		letter-spacing: -0.05em;				
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		line-height: 0.8;
		margin-top: 0;
		border-bottom: 1px dashed var(--black);
		text-transform: uppercase;		
	}
	
	h2 {
		font-weight: 600;
	}
	
	
	h3 {
		font-weight: 400;
	}
	
	h4 {
		margin-bottom: 5px;
	}
	
	a {
		text-decoration: underline;
		transition: color 200ms;
		
		&:hover {
			color: var(--orange);
		}
	}
	
	.large-text {
		font-size: 1.5rem;
		
		@media(min-width: 601px) {
			font-size: 3rem;
			line-height: 3.6rem;
		}
		
	}
`;

export default Typography;
