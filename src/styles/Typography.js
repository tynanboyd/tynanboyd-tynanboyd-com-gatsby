import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
	html {
		font-family: 'Work Sans', 'system-ui', 'Helvetica', sans-serif;
		color: var(--black);
		line-height: 1.3;
	}
	
	.text-center {
		text-align: center;p
	}
	
	h1, 
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
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
`;

export default Typography;
