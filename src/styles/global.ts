import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--default-text-color: #29292e;
		--light-text-color: #737380;
		--line-color: #a8a8b3;
		--primary-color: #835afd;
		--secondary-color: #e559f9;
		--light-background-color: #fefefe;
		--white-color: #fff;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #f8f8f8;
		color: var(--default-text-color);
	}

	body,
	input,
	button,
	textarea {
		font: 400 16px "Roboto", sans-serif;
	}
`;