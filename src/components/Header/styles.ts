import styled from 'styled-components';

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
