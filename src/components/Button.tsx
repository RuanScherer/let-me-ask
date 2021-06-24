import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean
};

export function Button({ isOutlined = false, ...rest }: ButtonProps): JSX.Element {
	return (
		<button
			className={`button ${isOutlined ? 'outlined' : ''}`}
			{...rest}
		/>
	);
}