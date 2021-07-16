import styled from 'styled-components';

export const StyledAuthPage = styled.div`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
`;

export const StyledAuthPageBanner = styled.aside`
	flex: 7;

	background-color: var(--primary-color);
	color: var(--white-color);

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 7.5rem 5rem;

	img {
		max-width: 20rem;
	}

	strong {
		font: 700 2.25rem "Poppins", sans-serif;
		line-height: 2.6rem;
		margin-top: 1rem;
	}

	p {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-top: 1rem;
		color: #f8f8f8;
	}

	@media screen and (max-width: 980px) {
		display: none;
	}
`;

export const StyledAuthPageMainContainer = styled.main`
	flex: 8;

	padding: 0 2rem;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledAuthPageMainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 320px;
	align-items: stretch;
	text-align: center;

	> img {
		align-self: center;
		margin-bottom: 4rem
	}
`;

export const StyledAuthPageMainTitle = styled.h2`
	font-size: 1.5rem;
	margin: 0 0 1.5rem;
	font-family: "Poppins", sans-serif;
`;

export const StyledAuthPageForm = styled.form`
	input {
		height: 3.2rem;
		border-radius: 8px;
		padding: 0 1rem;
		background-color: var(--white-color);
		border: 1px solid var(--line-color);
	}

	button {
		margin-top: 1rem;
	}

	button,
	input {
		width: 100%;
	}
`;
