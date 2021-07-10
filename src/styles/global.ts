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

		@media screen and (max-width: 640px) {
			font-size: 14px;
		}
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: .3s;
	}

	body {
		background-color: #f8f8f8;
		color: var(--default-text-color);
	}

	body,
	input,
	button,
	textarea {
		font: 400 1rem "Roboto", sans-serif;
	}
`;
