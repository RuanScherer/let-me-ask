import { ReactNode } from 'react';
import { StyledHeaderContainer, StyledHeaderContent } from './styles';
import logoImg from '../../assets/images/logo.svg';

type HeaderProps = {
	children?: ReactNode
}

export function Header({ children }: HeaderProps): JSX.Element {
	return (
		<StyledHeaderContainer>
			<StyledHeaderContent>
				<img src={logoImg} alt="" />

				<div>{children}</div>
			</StyledHeaderContent>
		</StyledHeaderContainer>
	);
}