import { render, screen } from '@testing-library/react';
import { Button } from './';

describe('Button Component', () => {
	test('Show simple button', () => {
		render(<Button />);

		const button = screen.getByTestId('button');

		expect(button).toHaveClass('button');
	});

	test('Show outlined button', () => {
		render(<Button isOutlined />);

		const button = screen.getByTestId('button');

		expect(button).toHaveClass('button');
		expect(button).toHaveClass('outlined');
	});
});

export { };
