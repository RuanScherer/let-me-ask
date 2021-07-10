import styled from 'styled-components';

export const StyledRoomQuestionsCounter = styled.span`
	margin-left: 1rem;
	background-color: var(--secondary-color);
	border-radius: 9999px;
	padding: .5rem 1rem;
	color: var(--white-color);
	font-weight: 500;
	font-size: .9rem;

	@media screen and (max-width: 450px) {
		margin-left: 0;
		margin-top: .5rem;
	}
`;
