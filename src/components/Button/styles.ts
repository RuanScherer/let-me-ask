import styled from 'styled-components';

export const StyledButton = styled.button`
	height: 3rem;
	border-radius: 8px;
	font-weight: 500;
	background-color: var(--primary-color);
	color: var(--white-color);
	padding: 0 2rem;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: 0;

	transition: 0.2s;

	@media screen and (max-width: 450px) {
		padding: 0 1.5rem;
	}

	img {
		margin-right: .5rem;
	}

	&.outlined {
		background-color: var(--white-color);
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
