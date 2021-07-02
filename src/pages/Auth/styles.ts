import styled from 'styled-components';

export const StyledAuthPage = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;
`;

export const StyledAuthPageBanner = styled.aside`
	flex: 7;

	background-color: var(--primary-color);
	color: var(--white-color);

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 120px 80px;

	img {
		max-width: 320px;
	}

	strong {
		font: 700 36px "Poppins", sans-serif;
		line-height: 42px;
		margin-top: 16px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
		margin-top: 16px;
		color: #f8f8f8;
	}
`;

export const StyledAuthPageMainContainer = styled.main`
	flex: 8;

	padding: 0 32px;

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
	}
`;

export const StyledAuthPageMainTitle = styled.h2`
	font-size: 24px;
	margin: 64px 0 24px;
	font-family: "Poppins", sans-serif;
`;

export const StyledAuthPageForm = styled.form`
	input {
		height: 50px;
		border-radius: 8px;
		padding: 0 16px;
		background-color: var(--white-color);
		border: 1px solid var(--line-color);
	}

	button {
		margin-top: 16px;
	}

	button,
	input {
		width: 100%;
	}
`;
