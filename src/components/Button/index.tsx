import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean
};

export function Button({ isOutlined = false, ...rest }: ButtonProps): JSX.Element {
	return (
		<StyledButton
			className={isOutlined ? 'outlined' : ''}
			data-testid="button"
			{...rest}
		/>
	);
}