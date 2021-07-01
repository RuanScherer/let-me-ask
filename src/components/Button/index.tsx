import { ButtonHTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean
};

export function Button({ isOutlined = false, ...rest }: ButtonProps): JSX.Element {
	return (
		<button
			className={`button ${isOutlined ? 'outlined' : ''}`}
			data-testid="button"
			{...rest}
		/>
	);
}