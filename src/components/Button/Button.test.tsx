import { render, screen } from '@testing-library/react';
import { Button } from './';

describe('Button Component', () => {
	test('Show simple button', () => {
		render(<Button>Children de teste no botão</Button>);

		expect(screen.getByText('Children de teste no botão')).toBeInTheDocument();
	});

	test('Show outlined button', () => {
		render(<Button isOutlined>Children de teste no botão</Button>);

		const button = screen.getByTestId('button');

		expect(button).toHaveClass('outlined');
		expect(screen.getByText('Children de teste no botão')).toBeInTheDocument();
	});
});

export { };
