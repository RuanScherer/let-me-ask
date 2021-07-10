import styled from 'styled-components';

export const StyledRoomPageContainer = styled.main`
	max-width: 800px;
	margin: 0 auto;
	padding: 0 1.5rem;
`;

export const StyledRoomInfoContainer = styled.div`
	margin: 2rem 0 1.5rem;
	display: flex;
	align-items: center;

	@media screen and (max-width: 450px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const StyledRoomName = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: 1.5rem;
	color: var(--default-text-color);
`;

export const StyledQuestionsList = styled.ul`
	margin-top: 2rem;
	list-style: none;
`;
