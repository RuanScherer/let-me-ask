import styled from 'styled-components';

export const StyledRoomQuestionInput = styled.textarea`
	width: 100%;
	border: 0;
	padding: 16px;
	border-radius: 8px;
	background-color: var(--light-background-color);
	box-shadow: 0 2px 12px rgba(156, 154, 154, 0.04);
	resize: vertical;
	min-height: 130px;
`;

export const StyledRoomFormFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;

	> button {
		margin-left: auto;
	}
`;

export const StyledRoomUserInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	span {
		margin-left: 8px;
		color: var(--default-text-color);
		font-weight: 500;
		font-size: 14px;
	}
`;

export const StyledRoomLoginAlert = styled.span`
	font-size: 14px;
	color: var(--light-text-color);
	font-weight: 500;

	button {
		background-color: transparent;
		border: 0;
		color: var(--primary-color);
		text-decoration: underline;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
	}
`;
