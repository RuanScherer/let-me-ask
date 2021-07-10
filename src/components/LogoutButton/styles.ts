import styled from 'styled-components';
import { StyledButton } from '../Button/styles';

export const StyledLogoutButton = styled(StyledButton)`
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 0 1rem 1rem 0;
	padding: .8rem;

	> svg {
		width: 1.8rem;
		stroke-width: 30px;
	}
`;
