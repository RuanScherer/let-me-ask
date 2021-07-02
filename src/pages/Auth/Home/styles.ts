import styled from 'styled-components';

export const StyledSeparator = styled.div`
	font-size: 14px;
	color: var(--line-color);
	margin: 32px 0;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		flex: 1;
		height: 1px;
		background-color: var(--line-color);
		margin-right: 16px;
	}

	&::after {
		content: "";
		flex: 1;
		height: 1px;
		background-color: var(--line-color);
		margin-left: 16px;
	}
`;

export const StyledCreateRoomButton = styled.button`
	margin-top: 64px;
	height: 50px;
	border-radius: 8px;
	font-weight: 500;
	background-color: #ea4335;
	color: var(--white-color);

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: 0;

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&:hover {
		filter: brightness(0.9);
	}
`;
