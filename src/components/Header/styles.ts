import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
	padding: 1.5rem;
	border-bottom: 1px solid #e2e2e2;
`;

export const StyledHeaderContent = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> img {
		max-height: 2.9rem;
	}

	> div {
		display: flex;

		button {
			height: 2.5rem;
			margin-left: 1rem;
		}
	}

	@media screen and (max-width: 355px) {
		> img {
			max-height: 2.2rem;
		}
	}
`;
