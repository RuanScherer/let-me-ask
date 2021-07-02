import styled from 'styled-components';

export const StyledRoomCode = styled.button`
	height: 40px;
	border-radius: 8px;
	overflow: hidden;
	background-color: var(--white-color);
	border: 1px solid var(--primary-color);
	cursor: pointer;
	display: flex;

	div {
		background-color: var(--primary-color);
		padding: 0 12px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s;
	}

	span {
		display: block;
		align-self: center;
		flex: 1;
		padding: 0 16px 0 12px;
		width: 240px;
		font-size: 14px;
		font-weight: 500;
	}

	&:not(:disabled):hover {
		& > div {
			filter: brightness(0.9);
		}
	}
`;
