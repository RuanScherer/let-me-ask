import styled from 'styled-components';

export const StyledRoomCode = styled.button`
	height: 2.5rem;
	border-radius: 8px;
	overflow: hidden;
	background-color: var(--white-color);
	border: 1px solid var(--primary-color);
	cursor: pointer;
	display: flex;

	div {
		background-color: var(--primary-color);
		padding: 0 .75rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		display: block;
		align-self: center;
		flex: 1;
		padding: 0 1rem 0 .75rem;
		width: 15rem;
		font-size: .85rem;
		font-weight: 500;
	}

	&:not(:disabled):hover {
		& > div {
			filter: brightness(0.9);
		}
	}
	
	@media screen and (max-width: 650px) {
		span {
			display: none;
		}
	}
`;
