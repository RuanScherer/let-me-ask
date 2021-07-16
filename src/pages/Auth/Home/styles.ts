import styled from 'styled-components';

export const StyledSeparator = styled.div`
	font-size: .95rem;
	color: var(--line-color);
	margin: 2rem 0;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		flex: 1;
		height: 1px;
		background-color: var(--line-color);
		margin-right: 1rem;
	}

	&::after {
		content: "";
		flex: 1;
		height: 1px;
		background-color: var(--line-color);
		margin-left: 1rem;
	}
`;

export const StyledCreateRoomButton = styled.button<{ backgroundColor?: string }>`
	height: 3.2rem;
	border-radius: 8px;
	font-weight: 500;
	background-color: ${props => props.backgroundColor || 'var(--primary-color)'};
	color: var(--white-color);

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: 0;

	transition: filter 0.2s;

	img {
		margin-right: .5rem;
	}

	&:hover {
		filter: brightness(0.9);
	}

	& + & {
		margin-top: .8rem;
	}
`;
