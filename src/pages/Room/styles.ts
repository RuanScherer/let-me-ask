import styled from 'styled-components';

export const StyledRoomPageContainer = styled.main`
	max-width: 800px;
	margin: 0 auto;
`;

export const StyledHeaderContainer = styled.header`
	padding: 24px;
	border-bottom: 1px solid #e2e2e2;
`;

export const StyledHeaderContent = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> img {
		max-height: 45px;
	}

	> div {
		display: flex;

		button {
			height: 40px;
			margin-left: 16px;
		}
	}
`;

export const StyledRoomInfoContainer = styled.div`
	margin: 32px 0 24px;
	display: flex;
	align-items: center;
`;

export const StyledRoomName = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: 24px;
	color: var(--default-text-color);
`;

export const StyledRoomQuestionsCounter = styled.span`
	margin-left: 16px;
	background-color: var(--secondary-color);
	border-radius: 9999px;
	padding: 8px 16px;
	color: var(--white-color);
	font-weight: 500;
	font-size: 14px;
`;

export const StyledQuestionsList = styled.ul`
	margin-top: 32px;
	list-style: none;
`;
