import styled from 'styled-components';

export const StyledRoomQuestionInput = styled.textarea`
	width: 100%;
	border: 0;
	padding: 1rem;
	border-radius: 8px;
	background-color: var(--light-background-color);
	box-shadow: 0 2px 12px rgba(156, 154, 154, 0.04);
	resize: vertical;
	min-height: 8rem;
`;

export const StyledRoomFormFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;

	> button {
		margin-left: auto;
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;
		align-items: flex-start;

		> button {
			margin-left: 0;
			margin-top: 1rem;
			width: 100%;
		}
	}
`;

export const StyledRoomUserInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	span {
		margin-left: .5rem;
		color: var(--default-text-color);
		font-weight: 500;
		font-size: 1rem;
	}
`;

export const StyledRoomLoginAlert = styled.span`
	font-size: 1rem;
	color: var(--light-text-color);
	font-weight: 500;

	button {
		background-color: transparent;
		border: 0;
		color: var(--primary-color);
		text-decoration: underline;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
	}
`;
